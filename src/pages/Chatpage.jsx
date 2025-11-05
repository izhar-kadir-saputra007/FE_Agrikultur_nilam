import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function ChatPage() {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [username, setUsername] = useState(""); // Menyimpan nama pengguna
  const navigate = useNavigate();

  // Mengambil token dan nama dari localStorage
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      setUsername(name); // Simpan nama di state
    }

    if (!token) {
      // Jika tidak ada token, arahkan ke halaman nama
      navigate("/nama");
    } else {
      // Jika ada token, lakukan permintaan API untuk mendapatkan chat
      axios
        .get("http://localhost:3500/api/chats", {
          headers: {
            Authorization: `Bearer ${token}`, // Kirim token dalam header
          },
        })
        .then((response) => {
          setChats(response.data); // Memperbarui chats dengan data yang didapatkan
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat mengambil chat:", error);
        });
    }
  }, [token, navigate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const handleCreateChat = () => {
    if (!message.trim()) {
      console.warn("Pesan tidak boleh kosong!");
      return;
    }

    axios
      .post(
        "http://localhost:3500/api/chats",
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Kirim token dalam header
          },
        }
      )
      .then((response) => {
        setChats([...chats, response.data.chat]); // Menambahkan chat yang baru ke state
        setMessage(""); // Reset pesan setelah pengiriman
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat membuat chat:", error);
      });
  };

  const handleReply = (chatId) => {
    if (!reply.trim()) {
      console.warn("Balasan tidak boleh kosong!");
      return;
    }

    axios
      .post(
        `http://localhost:3500/api/chats/${chatId}/replies`,
        { reply },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Kirim token dalam header
          },
        }
      )
      .then((response) => {
        const updatedChats = chats.map((chat) => {
          if (chat.id === chatId) {
            return {
              ...chat,
              Replies: [...chat.Replies, response.data.reply],
            }; // Update chat dengan reply yang baru
          }
          return chat;
        });
        setChats(updatedChats); // Memperbarui state chats dengan balasan yang baru
        setReply(""); // Reset balasan setelah pengiriman
        setSelectedChatId(null); // Menutup input balasan
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat membalas chat:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-800">
        <div className="container mx-auto p-8">
          <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-900">Chat Interaktif</h1>

          {/* Tampilkan Nama Pengguna */}
          {username && (
            <div className="mb-4 text-center">
              <p className="text-lg font-medium text-gray-700">
                Selamat datang, <span className="text-indigo-600 font-bold">{username}</span>!
              </p>
            </div>
          )}

          {/* Form Input untuk Membuat Chat */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Kirim Pesan Baru</h2>
            <textarea
              className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Masukkan pesan Anda"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="w-full p-4 bg-blue-600 text-black font-semibold rounded-lg hover:bg-blue-700 transition duration-300" onClick={handleCreateChat}>
              Kirim Pesan
            </button>
          </div>

          {/* Daftar Chat */}
          <div className="space-y-6">
            {chats.map((chat) => (
              <div key={chat.id} className="bg-gray-100 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-indigo-700">{chat.User ? chat.User.name : username}</h3>
                <p className="text-lg mt-2">{chat.message}</p>
                <p className="text-sm text-gray-500 mt-2">{formatDate(chat.createdAt)}</p>

                {/* Daftar Balasan */}
                <div className="mt-4 space-y-3">
                  {chat.Replies &&
                    chat.Replies.map((reply) => (
                      <div key={reply.id} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <p>
                          <strong>{reply.User ? reply.User.name : username}</strong>: {reply.reply}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{formatDate(reply.createdAt)}</p>
                      </div>
                    ))}
                </div>

                {/* Tombol Balas */}
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800" onClick={() => setSelectedChatId(chat.id)}>
                  Balas
                </button>

                {/* Input Balasan */}
                {selectedChatId === chat.id && (
                  <div className="mt-4">
                    <textarea
                      className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                      placeholder="Masukkan balasan Anda"
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                    />
                    <button className="w-full p-4 bg-green-600 text-black font-semibold rounded-lg hover:bg-green-700 transition duration-300" onClick={() => handleReply(chat.id)}>
                      Kirim Balasan
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatPage;
