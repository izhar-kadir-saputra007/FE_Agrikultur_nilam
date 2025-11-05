import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Avatar,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  EmojiNature,
  LocalFlorist,
  Grass,
  WaterDrop,
  Thermostat,
  Spa,
  MonetizationOn,
  ExpandMore,
  Science,
  AttachMoney,
  Public,
  MedicalServices,
  Agriculture,
} from "@mui/icons-material";

function Info() {
  // Data bibit nilam dengan gambar dan informasi tambahan
  const seedData = [
  {
    name: "Bibit Nilam Grade Sidikalang",
    image: "/src/assets/images/info/sidikalang.jpg",
    description: `
      Nilam Sidikalang (Pogostemon cablin Benth) merupakan varietas unggulan yang berasal dari daerah Sidikalang, Sumatera Utara. 
      Tanaman ini sangat dihargai karena menghasilkan minyak atsiri berkualitas tinggi dengan kandungan patchouli alcohol yang optimal.
      
      Keunggulan utama:
      - Kandungan minyak atsiri mencapai 2.5-3.5%
      - Aroma khas, kuat, dan tahan lama
      - Bahan baku industri parfum premium
      - Digunakan dalam kosmetik dan aromaterapi
      
      Karakteristik tumbuh:
      - Ketinggian optimal: 300-800 mdpl
      - Kebutuhan sinar matahari: 70-80%
      - Umur panen: 8-10 bulan
      - Potensi hasil: 3-4 ton/ha (kering)
    `,
    additionalInfo: [
      {
        title: "Proses Budidaya",
        icon: <Agriculture />,
        content: "Memerlukan tanah gembur dengan drainase baik. Pemeliharaan meliputi penyiangan rutin, pemupukan organik, dan pengendalian hama terpadu."
      },
      {
        title: "Penyulingan",
        icon: <Science />,
        content: "Menggunakan metode steam distillation selama 6-8 jam dengan rendemen minyak 2.5-3.5%."
      }
    ]
  },
  {
    name: "Bibit Nilam Grade Tapak Tuan",
    image: "/src/assets/images/info/Tapaktuan.jpg",
    description: `
      Nilam Tapak Tuan adalah varietas unggul yang dikembangkan di Aceh Selatan, dikenal dengan ketahanan terhadap penyakit dan produktivitas tinggi.
      
      Keistimewaan:
      - Tahan terhadap jamur daun (Phytophthora)
      - Kandungan minyak 2.8-3.8%
      - Aroma lebih segar dibanding varietas lain
      - Masa panen lebih cepat
      
      Kondisi optimal:
      - Ketinggian: 0-500 mdpl
      - Curah hujan: 2000-3000 mm/tahun
      - Suhu ideal: 22-28°C
      - Umur panen: 7-9 bulan
    `,
    additionalInfo: [
      {
        title: "Ketahanan Penyakit",
        icon: <MedicalServices />,
        content: "Memiliki ketahanan alami terhadap jamur daun dan bakteri patogen."
      }
    ]
  },
  {
    name: "Bibit Nilam Grade Lhokseumawe",
    image: "/src/assets/images/info/Lhokseumawe.jpg",
    description: `
      Nilam Lhokseumawe merupakan varietas adaptif yang dikembangkan khusus untuk lahan bekas sawah dan daerah rawa pasang surut.
      
      Karakter unik:
      - Tahan genangan air hingga 2 minggu
      - Kandungan minyak 2.2-3.0%
      - Aroma lebih earthy dan woody
      - Toleran terhadap tanah asam
      
      Adaptasi lingkungan:
      - Ketinggian: 0-400 mdpl
      - pH tanah: 5.0-6.5
      - Umur panen: 9-11 bulan
      - Hasil panen: 2.5-3.5 ton/ha
    `,
    additionalInfo: [
      {
        title: "Adaptasi Khusus",
        icon: <WaterDrop />,
        content: "Memiliki sistem perakaran yang mampu bertahan dalam kondisi tergenang sementara."
      }
    ]
  }
];
  //   // // {
  //   // //   name: "Bibit Nilam Grade Lhokseumawe",
  //   // //   image: "/src/assets/images/info/Lhokseumawe.jpg",
  //   // //   description: "Bibit adaptif untuk lahan bekas sawah",
  //   // //   details: [
  //   // //     "Ketinggian optimal: 0-400 mdpl",
  //   // //     "Tahan genangan air sementara",
  //   // //     "Umur panen: 9-11 bulan",
  //   // //     "Potensi hasil: 2.5-3.5 ton/ha (kering)",
  //   // //   ],
  //   // //   additionalInfo: [
  //   // //     {
  //   // //       title: "Adaptasi Khusus",
  //   // //       icon: <WaterDrop />,
  //   // //       content:
  //   // //         "Khusus dikembangkan untuk lahan bekas sawah dengan kemampuan bertahan pada kondisi genangan air sementara.",
  //   // //     },
  //   // //     {
  //   // //       title: "Keunikan",
  //   // //       icon: <Grass />,
  //   // //       content:
  //   // //         "Memiliki kandungan minyak dengan karakter aroma yang sedikit berbeda dari varietas lainnya.",
  //   // //     },
  //   // //   ],
  //   // },
  // ];

  // Data pupuk dengan gambar
  const fertilizerData = [
    {
      name: "Pupuk Organik",
      price: "4.500/kg",
      image: "/src/assets/images/info/Pupukorganik.jpg",
      description: "Pupuk alami untuk pertumbuhan tanaman yang sehat",
    },
    {
      name: "Pupuk NPK",
      price: "25.000/kg",
      image: "/src/assets/images/info/Pupuknpk.png",
      description: "Pupuk lengkap mengandung Nitrogen, Fosfor, dan Kalium",
    },
    {
      name: "Pupuk Urea",
      price: "14.000/kg",
      image: "/src/assets/images/info/Pupukurea.jpg",
      description: "Sumber nitrogen untuk pertumbuhan vegetatif tanaman",
    },
  ];

  // Data nilam Gorontalo dengan gambar
  const nilamData = [
    {
      name: "Terna Basah Gorontalo",
      price: "2.000/kg",
      image: "/src/assets/images/info/Ternabasah.jpg",
      description: "Hasil panen nilam segar dengan kadar air tinggi",
    },
    {
      name: "Terna Kering Gorontalo",
      price: "3.000/kg",
      image: "/src/assets/images/info/Ternakering.jpg",
      description: "Nilam kering siap olah dengan kadar minyak optimal",
    },
  ];

  // Komponen Accordion untuk informasi tambahan
  const AdditionalInfoAccordion = ({ items }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Informasi Lebih Lanjut:
        </Typography>
        {items.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{ mb: 1 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "primary.light", mr: 2, width: 32, height: 32 }}>
                  {item.icon}
                </Avatar>
                <Typography variant="subtitle1" fontWeight="medium">
                  {item.title}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                {item.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    );
  };

  // Komponen untuk menampilkan detail bibit nilam
// Komponen untuk menampilkan detail bibit nilam
const SeedDetailCard = ({ seed }) => (
  <Card sx={{ mb: 4, boxShadow: 3 }}>
    <Grid container>
      <Grid item xs={12} md={4}>
        <Box
          component="img"
          src={seed.image}
          alt={seed.name}
          sx={{
            width: "100%",
            height: 250,
            objectFit: "cover",
            borderRight: { md: "1px solid #e0e0e0" },
          }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {seed.name}
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            paragraph
            sx={{ whiteSpace: 'pre-line' }}
          >
            {seed.description}
          </Typography>
          {/* {seed.additionalInfo && <AdditionalInfoAccordion items={seed.additionalInfo} />} */}
        </CardContent>
      </Grid>
    </Grid>
  </Card>
);

  // Komponen untuk menampilkan info pupuk dengan gambar
  const FertilizerCard = ({ fertilizer }) => (
    <Card sx={{ mb: 2 }}>
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Box
            component="img"
            src={fertilizer.image}
            alt={fertilizer.name}
            sx={{
              width: "100%",
              height: 100,
              objectFit: "cover",
              p: 1,
              borderRadius: 2,
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent sx={{ py: 1 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {fertilizer.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {fertilizer.description}
            </Typography>
            <Typography variant="body1" color="primary.main" fontWeight="bold">
              Rp {fertilizer.price}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );

  // Komponen untuk menampilkan info nilam Gorontalo dengan gambar
  const NilamCard = ({ item }) => (
    <Card sx={{ mb: 2 }}>
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Box
            component="img"
            src={item.image}
            alt={item.name}
            sx={{
              width: "100%",
              height: 100,
              objectFit: "cover",
              p: 1,
              borderRadius: 2,
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent sx={{ py: 1 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="body1" color="primary.main" fontWeight="bold">
              Rp {item.price}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
 <div className="relative bg-green-700 text-white py-20 overflow-hidden">
  {/* SVG Wave Background */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1440 320"
    className="absolute top-0 left-0 w-full h-full z-0"
    preserveAspectRatio="none"
  >
    <path 
      fill="#2e7d32"
      fillOpacity="0.94" 
     d="M0,128L60,144C120,160,240,192,360,197.3C480,203,600,181,720,181.3C840,181,960,203,1080,192C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    ></path>
  </svg>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    <h1 className="text-4xl font-bold text-center mb-6">
      Informasi Nilam
    </h1>
    <p className="text-xl text-center max-w-md mx-auto pb-40">
      Selamat datang di halaman informasi! Temukan informasi lengkap tentang bibit nilam, pupuk, dan terna nilam beserta karakteristiknya.
    </p>
  </div>
</div>

      {/* Konten Utama */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          <EmojiNature sx={{ verticalAlign: "middle", mr: 1 }} />
          Informasi Bibit Nilam
        </Typography>

        {/* Detail Bibit Nilam */}
        {seedData.map((seed, index) => (
          <SeedDetailCard key={index} seed={seed} />
        ))}

        {/* Harga Lainnya */}
        <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 4 }}>
          Informasi Harga Lainnya
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                <LocalFlorist color="secondary" sx={{ mr: 1 }} />
                Harga Pupuk
              </Typography>
              {fertilizerData.map((fertilizer, index) => (
                <FertilizerCard key={index} fertilizer={fertilizer} />
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                <MonetizationOn color="secondary" sx={{ mr: 1 }} />
                Harga Nilam Gorontalo
              </Typography>
              {nilamData.map((item, index) => (
                <NilamCard key={index} item={item} />
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Info;