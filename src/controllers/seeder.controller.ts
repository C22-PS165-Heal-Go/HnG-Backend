import express from 'express';
import ApiError from '../utils/api-error';
import { sendResponse } from '../utils/api';
import httpStatus from 'http-status';
import catchAsync from '../utils/catch-async';
import destinationService from '../services/destination.service';

const destinationSeeder = catchAsync(async (req: express.Request, res: express.Response) => {
    await destinationService.createDestination({
        name: 'Malioboro',
        code: '001',
        category: 'Pasar',
        location: 'Yogyakarta',
        description: 'Jalan Malioboro adalah nama salah satu kawasan jalan dari tiga jalan di Kota Yogyakarta yang membentang dari Tugu Yogyakarta hingga ke perempatan Kantor Pos Yogyakarta. Secara keseluruhan terdiri atas Jalan Margo Utomo, Jalan Malioboro, dan Jalan Margo Mulyo. Jalan ini merupakan poros Garis Imajiner Kraton Yogyakarta',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Malioboro_Street%2C_Yogyakarta.JPG/1200px-Malioboro_Street%2C_Yogyakarta.JPG'
    })
    await destinationService.createDestination({
        name: 'Pantai Pangandaran',
        code: '002',
        category: 'Pantai',
        location: 'Jawa Barat',
        description: 'Pantai Pangandaran merupakan sebuah objek wisata andalan Kabupaten Pangandaran yang terletak di sebelah tenggara Jawa Barat, tepatnya di Desa Pangandaran dan Pananjung, sekitar 222 km dari selatan Bandung, Kecamatan Pangandaran, Kabupaten Pangandaran, Provinsi Jawa Barat.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Pantai_Pangandaran.jpg/1200px-Pantai_Pangandaran.jpg'
    })
    await destinationService.createDestination({
        name: 'Dunia Fantasi(Dufan)',
        code: '003',
        category: 'Taman',
        location: 'Jakarta',
        description: 'Dufan atau disebut juga Dunia Fantasi adalah sebuah theme park yang terletak di kawasan Taman Impian Jaya Ancol, Jakarta Utara, Indonesia yang diresmikan dan dibuka untuk umum pada tanggal 29 Agustus 1985',
        image: 'https://www.ancol.com/shared/images/606bc34a-097b-4b33-8fcb-92247a25b2bd.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Mini Indonesia Indah (TMII)',
        code: '004',
        category: 'Taman',
        location: 'Jakarta',
        description: 'Taman Mini Indonesia Indah merupakan suatu kawasan taman wisata bertema budaya Indonesia di Jakarta Timur. Area seluas kurang lebih 150 hektare atau 1,5 kilometer persegi ini terletak pada koordinat 6°18′6.8″LS,106°53′47.2″BT.',
        image: 'https://jadwaltravel.com/wp-content/uploads/2019/11/https___www.instagram.com_p_BhOPpmAnqj7_.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Safari Bogor',
        code: '005',
        category: 'Taman',
        location: 'Jawa Barat',
        description: 'Taman Safari Indonesia adalah tempat wisata keluarga berwawasan lingkungan yang berorientasi pada habitat satwa di alam bebas. Taman Safari Indonesia terletak di Desa Cibeureum Kecamatan Cisarua, Kabupaten Bogor, Jawa Barat atau yang lebih dikenal dengan kawasan Puncak.',
        image: 'https://pinhome-blog-assets-public.s3.amazonaws.com/2021/08/taman-safari-bogor-hotel-1.jpg'
    })
    await destinationService.createDestination({
        name: 'Gunung Bromo',
        code: '006',
        category: 'Gunung',
        location: 'Jawa Timur',
        description: 'Gunung Bromo atau dalam bahasa Tengger dieja "Brama", juga disebut Kaldera Tengger, adalah sebuah gunung berapi aktif di Jawa Timur, Indonesia.',
        image: 'https://statik.tempo.co/data/2019/05/21/id_843378/843378_720.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Pandawa',
        code: '007',
        category: 'Pantai',
        location: 'Bali',
        description: 'Pantai Pandawa adalah salah satu kawasan wisata di area Kuta selatan, Kabupaten Badung, Bali. Pantai ini terletak di balik perbukitan dan sering disebut sebagai Pantai Rahasia. Di sekitar pantai ini terdapat dua tebing yang sangat besar yang pada salah satu sisinya dipahat lima patung Pandawa dan Kunti.',
        image: 'https://koran-jakarta.com/images/article/pantai-pandawa-destinasi-hits-di-bali-selatan-220421144844.jpg'
    })
    await destinationService.createDestination({
        name: 'Danau Toba',
        code: '008',
        category: 'Air',
        location: 'Sumatera Utara',
        description: 'Danau Toba adalah danau alami berukuran besar di Indonesia yang berada di kaldera Gunung Supervulkan. Danau ini memiliki panjang 100 kilometer, lebar 30 kilometer, dan kedalaman 505 meter. Danau ini terletak di tengah pulau Sumatra bagian utara dengan ketinggian permukaan sekitar 900 meter',
        image: 'https://img.inews.co.id/media/822/files/inews_new/2021/09/03/danau_toba.jpg'
    })
    await destinationService.createDestination({
        name: 'Lombok',
        code: '009',
        category: 'Pantai',
        location: 'Nusa Tenggara Barat',
        description: 'Pulau Lombok adalah sebuah pulau di kepulauan Sunda Kecil atau Nusa Tenggara yang terpisahkan oleh Selat Lombok dari Bali di sebelah barat dan Selat Alas di sebelah timur dari Sumbawa. Pulau ini kurang lebih berbentuk bulat dengan semacam "ekor" di sisi barat daya yang panjangnya kurang lebih 70 km',
        image: 'https://www.weseektravel.com/wp-content/uploads/2019/10/MAWUN-BEACH-LOMBOK-INDONESIA--712x768.jpg'
    })
    await destinationService.createDestination({
        name: 'Ubud',
        code: '010',
        category: 'Pantai',
        location: 'Bali',
        description: 'Kota Ubud, terletak di bagian tengah pulau Bali, Indonesia, dikenal sebagai pusat tarian dan kerajinan tradisional. Hutan hujan dan terasering padi yang mengelilingi kawasan Ubud, ditambah pura dan tempat pemujaan, merupakan salah satu lanskap Bali yang paling terkenal. Terdapat situs suci kuno, yaitu Goa Gajah yang memiliki ukiran serba mendetail dan Gunung Kawi, yaitu tempat pemujaan yang diukir dari batu',
        image: 'https://twomonkeystravelgroup.com/wp-content/uploads/2021/01/DIY-Travel-Guide-to-Ubud-Bali-Indonesia-03.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Langit',
        code: '011',
        category: 'Taman',
        location: 'Jawa Barat',
        description: 'Taman Langit Pangalengan 360 merupakan destinasi wisata panorama dan taman perkemahan ( Panoramic and Camp Ground Spot ), terletak di Perkebunan Cukul Desa Sukaluyu, Kecamatan Pangalengan, Kabupaten Bandung - Jawa Barat berada diketinggian 1650-1660 mdpl. Taman Langit Pangalengan 360 menyajikan pemandangan alam di perbatasan Bandung Selatan dan Garut Selatan dan Juga sebagian Kota Bandung.',
        image: 'https://asset.kompas.com/crops/b1xj-5QcMgQM9GRqUehmpgLwIeA=/49x2:679x422/750x500/data/photo/2022/01/04/61d432eabcf26.jpg'
    })
    await destinationService.createDestination({
        name: 'Kawah Putih',
        code: '012',
        category: 'Air',
        location: 'Jawa Barat',
        description: 'Kawah Putih adalah sebuah tempat wisata di Jawa Barat yang terletak di Desa Alam Endah, Kecamatan Rancabali, Kabupaten Bandung Jawa Barat yang terletak di kaki Gunung Patuha. Kawah putih merupakan sebuah danau yang terbentuk dari letusan Gunung Patuha.',
        image: 'https://awsimages.detik.net.id/community/media/visual/2022/05/03/kawasan-wisata-kawah-putih-2_169.jpeg?w=700&q=90'
    })
    await destinationService.createDestination({
        name: 'Green Canyon Pangandaran',
        code: '013',
        category: 'Air',
        location: 'Jawa Barat',
        description: 'Cukang Taneuh atau Green Canyon adalah salah satu objek wisata di Jawa Barat yang terletak di Desa Kertayasa Kecamatan Cijulang, Kabupaten Pangandaran. Objek wisata ini berjarak ± 31 km dari Pangandaran.',
        image: 'https://cdn-cas.orami.co.id/parenting/images/Green-Canyon-Indonesia-1.width-800.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Cikaso',
        code: '014',
        category: 'Air',
        location: 'Jawa Barat',
        description: 'Air Terjun Cikaso, adalah merupakan salahsatu air terjun yang terletak di selatan Kabupaten Sukabumi. Air terjun ini juga dikenal sebagai Curug Luhur, tetapi nama Curug Cikaso lebih dikenal masyarakat sekitar dikarenakan aliran airnya berasal dari anak Sungai Cikaso yaitu Sungai Cicurug',
        image: 'https://camerawisata.com/wp-content/uploads/2018/09/Pemandangan-Curug-Cikaso-Sukabumi.png'
    })
    await destinationService.createDestination({
        name: 'Kepulauan Seribu',
        code: '015',
        category: 'Pantai',
        location: 'Jakarta',
        description: 'Kepulauan Seribu merupakan salah satu wilayah yang masuk ke dalam administrasi Pemerintah Provinsi DKI Jakarta. Secara geografis, Kepulauan Seribu memiliki total wilayah seluas 4.745,62 km2 yang terdiri dari 8,76 km2 daratan, dan terdiri lebih dari 110 pulau.',
        image: 'https://pulauseribu.co.id/wp-content/uploads/cottage-pulau-seribu-murah-915x480.jpg'
    })
    await destinationService.createDestination({
        name: 'Cukul Sunrise Point',
        code: '016',
        category: 'Gunung',
        location: 'Jawa Barat',
        description: 'Untuk sunrise point di Cukul ini berupa area bukit dengan ketinggian 1600 meter di atas permukaan laut. Di area bukit tidak hanya menyediakan tempat terbaik untuk menyaksikan pesona alam matahari terbit.',
        image: 'https://awsimages.detik.net.id/community/media/visual/2018/06/16/434e9c8a-a1a9-489a-b9f7-3f7ebdc17b42_169.jpeg?w=620'
    })
    await destinationService.createDestination({
        name: 'Grafika Cikole',
        code: '017',
        category: 'Taman',
        location: 'Jawa Barat',
        description: 'Terminal wisata grafika cikole adalah tempat wisata, restoran serta penginapan di lembang yang berada di kaki gunung dengan ketinggian 1400 meter di atas permukaan laut. Udara yang sejuk dengan suhu 20 derajat celcius dan kontur area Terminal Wisata Grafika Cikole yang berbukit dikelilingi hutan pinus di area seluas 9 hektar merupakan tempat wisata di bandung lembang yang tepat untuk menyelenggrakan aktifitas outbound bagi keluarga, instansi, sekolah dan keluarga.',
        image: 'https://lh3.googleusercontent.com/pw/AM-JKLWbfHOa0RIz96n1nFMvtZchkdgIz9Cg6E4jBQwMzMPSKWvQCj7WszOmyxzuBnqL0gcL8Bxw0DMlJn6TRkQ_Dweoe-9bn6wi52oMUWLsFEvA9ta83w3mhQ-mck0DiNfcHSu_5HR8G0qN4LIt0VfmJBxD=w1429-h953-no'
    })
    await destinationService.createDestination({
        name: 'Rancabali Glamping',
        code: '018',
        category: 'Taman',
        location: 'Jawa Barat',
        description: 'Glamping Lakeside Rancabali adalah tempat wisata yang bernuansa alam. Di sekitar area ini dikelilingi oleh pemandangan perkebunan teh hijau yang sangat luar biasa indahnya.',
        image: 'https://www.hargatiket.net/wp-content/uploads/2019/01/harga-tiket-glamping-lakeside-rancabali.jpg'
    })
    await destinationService.createDestination({
        name: 'Nusa Penida',
        code: '019',
        category: 'Pantai',
        location: 'Bali',
        description: 'Nusa Penida adalah sebuah pulau bagian dari negara Republik Indonesia yang terletak di sebelah tenggara Bali yang dipisahkan oleh Selat Badung. Di dekat pulau ini terdapat juga pulau-pulau kecil lainnya yaitu Nusa Ceningan dan Nusa Lembongan.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f5/3e/e5/nusa-penida-island.jpg?w=1200&h=-1&s=1'
    })
    await destinationService.createDestination({
        name: 'Labuan Bajo',
        code: '020',
        category: 'Pantai',
        location: 'Nusa Tenggara Timur',
        description: 'Labuan Bajo merupakan salah satu kota yang berada di kecamatan Komodo, Kabupaten Manggarai Barat, provinsi Nusa Tenggara Timur, Indonesia. Kota Labuan Bajo juga merupakan ibu kota dari kecamatan Kecamatan Komodo dan ibu kota Kabupaten Manggarai Barat. Sedang diwacanakan pengembangan Kota Labuan Bajo.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/c6/labuan-bajo.jpg?w=700&h=500&s=1'
    })
    await destinationService.createDestination({
        name: 'Simpang Lima Gumul',
        code: '021',
        category: 'Taman',
        location: 'Jawa Timur',
        description: 'Monumen Simpang Lima Gumul atau biasa disingkat SLG adalah salah satu bangunan yang menjadi ikon Kabupaten Kediri yang bentuknya menyerupai Arc de Triomphe yang berada di Paris, Prancis. SLG mulai dibangun pada tahun 2003 dan diresmikan pada tahun 2008, yang digagas oleh Bupati Kediri saat itu, Sutrisno.',
        image: 'https://i.pinimg.com/736x/6c/0f/22/6c0f229eb61f169549cb7224d9695aa5.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Tanjung Lesung',
        code: '022',
        category: 'Pantai',
        location: 'Banten',
        description: 'Pantai Tanjung Lesung yang terletak di Desa Tanjung Jaya, Kecamatan Panimbang, Kabupaten Pandeglang, Provinsi Banten. Pantai yang menghadap ke Samudra Hindia ini berada sedikit menjorok ke laut yang terlihat seperti lesung (alat penumbuk padi). Karena bentuknya tersebut, pantai ini akhirnya dinamakan Lesung.',
        image: 'https://cdn-2.tstatic.net/travel/foto/bank/images/pantai-tanjung-lesung-banten.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Srakung',
        code: '023',
        category: 'Pantai',
        location: 'Yogyakarta',
        description: 'Pantai Srakung berlokasi di Desa Pucung, Kecamatan Girisubo, Kabupaten Gunungkidul, DIY. Lokasi pantai ini searah dengan Pantai Sadeng. Jadi jika ke Pantai Srakung bisa sekalian ke Pantai Sadeng.',
        image: 'http://www.pegipegi.com/travel/wp-content/uploads/2014/04/srakung6.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Sawarna',
        code: '024',
        category: 'Pantai',
        location: 'Banten',
        description: 'Desa Wisata Sawarna adalah sebuah Desa wisata di Kecamatan Bayah, Kabupaten Lebak, Banten. Desa Sawarna berbatasan langsung dengan Samudera Hindia, di sisi selatan sehingga Desa Sawarna merupakan kawasan pesisir pantai.',
        image: 'https://piknikwisata.com/wp-content/uploads/2019/11/info-lengkap-wisata-pantai-sawarna.jpg'
    })
    await destinationService.createDestination({
        name: 'Tebing Breksi',
        code: '025',
        category: 'Taman',
        location: 'Yogyakarta',
        description: 'Tebing Breksi merupakan tempat wisata yang berada di wilayah Kabupaten Sleman. Lokasinya berada di sebelah selatan Candi Prambanan dan berdekatan dengan Candi Ijo serta Kompleks Keraton Boko. Lokasi Wisata Tebing Breksi tepatnya berada di Desa Sambirejo, Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55572.',
        image: 'https://asset.kompas.com/crops/5ZBaogQARv8odjFn3ktbP1zZAKk=/0x0:739x493/750x500/data/photo/2021/03/09/60470c6b30f8c.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Safari Pasuruan',
        code: '026',
        category: 'Taman',
        location: 'Jawa Timur',
        description: 'Taman Safari Indonesia 2 adalah salah satu safari park terluas di Asia, yang terletak di lereng Gunung Arjuno, Kecamatan Prigen, Kabupaten Pasuruan, Jawa Timur.',
        image: 'https://cdn-2.tstatic.net/travel/foto/bank/images/sejumlah-satwa-di-taman-safari-prigen-kamis-322022.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Laut Bunaken',
        code: '027',
        category: 'Pantai',
        location: 'Sulawesi Utara',
        description: 'Taman Nasional Bunaken adalah taman laut yang terletak di Sulawesi Utara, Indonesia. Taman ini terletak di Segitiga Terumbu Karang yang menjadi habitat bagi 390 spesies terumbu karang dan juga berbagai spesies ikan, moluska, reptil, dan mamalia laut',
        image: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2020/01/ikan-laut-1.jpg'
    })
    await destinationService.createDestination({
        name: 'Pulau Padar',
        code: '028',
        category: 'Pantai',
        location: 'Nusa Tenggara Timur',
        description: 'Pulau Padar adalah pulau ketiga terbesar di kawasan Taman Nasional Komodo, setelah Pulau Komodo dan Pulau Rinca. Pulau ini relatif lebih dekat ke Pulau Rinca daripada ke Pulau Komodo, yang dipisahkan oleh Selat Lintah. Pulau Padar tidak dihuni oleh ora. Di sekitar pulau ini terdapat pula tiga atau empat pulau kecil.',
        image: 'https://awsimages.detik.net.id/community/media/visual/2019/01/18/327bf7c6-c6f2-4b6c-803a-f0c566fc08ff_169.jpeg?w=780&q=90'
    })
    await destinationService.createDestination({
        name: 'Pantai Tempora',
        code: '029',
        category: 'Pantai',
        location: 'Jawa Timur',
        description: 'Pantai Tampora yang terletak di Desa Kalianget, Kecamatan Banyuglugur, Kabupaten Situbondo Propinsi Jawa Timur ini memiliki pasir putih serta terdapat tebing bebatuan. Pantai tampora terletak di balik bukit dimana pohon-pohon rimbun menjadi nilai plus bagi wisatawan untuk menikmati keindahan pantai ini.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/31/3b/3b/pantai-tampora.jpg?w=1200&h=1200&s=1'
    })
    await destinationService.createDestination({
        name: 'Pantai Surumanis',
        code: '030',
        category: 'Pantai',
        location: 'Jawa Tengah',
        description: 'Pantai Surumanis Kebumen adalah pantai dengan pasir pantai berwarna hitam kecoklatan dengan batu karang besar disekelilingnya. Pantai ini berada pada daerah tersembunyi dan harus melewati Pantai Pecaron terlebih dahulu untuk menjangkaunya.',
        image: 'https://sikidang.com/wp-content/uploads/Pantai-Surumanis-Pantai-Surumanis.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Kasap',
        code: '031',
        category: 'Pantai',
        location: 'Jawa Timur',
        description: 'Pantai Kasap merupakan salah satu pantai di paitan. Secara administratif terletak di wilayah Kecamatan Pringkuku tepatnya di Dusun Ketro, Desa Watukarung. Pantai Kasap penampakannya mirip dengan Kabupaten Raja Ampat yang memiliki pulau pulau kecil di tengah laut.',
        image: 'https://www.pantainesia.com/wp-content/uploads/2018/07/pantai-kasap.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Gesing',
        code: '032',
        category: 'Pantai',
        location: 'Yogyakarta',
        description: 'Pantai Gesing memiliki pasir putih dan ombak yang kecil sehingga cocok untuk wisata keluarga dan bermain air. Hal yang menarik dari pantai ini adalah gradasi permukaan air dari warna hijau terang ke warna biru menambah keindahan Pantai Gesing.',
        image: 'https://awsimages.detik.net.id/community/media/visual/2020/03/03/c82b7a02-2962-4e47-a187-fe77d41fe2b9_169.jpeg?w=780&q=90'
    })
    await destinationService.createDestination({
        name: 'Pantai Balekambang',
        code: '033',
        category: 'Pantai',
        location: 'Jawa Timur',
        description: 'Pantai Balekambang adalah sebuah pantai di pesisir selatan yang terletak di tepi Samudra Indonesia secara administratif masuk wilayah Dusun Sumber Jambe, Desa Srigonco, Kecamatan Bantur, Kabupaten Malang, Jawa Timur dan merupakan salah satu wisata di Kabupaten Malang sejak 1985 hingga kini.',
        image: 'https://media.suara.com/pictures/653x366/2021/09/17/43570-pantai-balekambang-malang-instagramatbalekambangmalang.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Air Manis',
        code: '034',
        category: 'Pantai',
        location: 'Sumatera Barat',
        description: 'Pantai Air Manis adalah pantai yang terletak kurang lebih 10 km ke selatan dari pusat Kota Padang. Lokasinya Berada di belakang Gunung Padang atau tepatnya di Kecamatan Padang Selatan, Kota Padang. Pantai ini merupakan salah satu tujuan wisata populer yang selalu ramai dikunjungi oleh masyarakat',
        image: 'https://pariwisata.padang.go.id/uploads/images/image_default_5e50303d895ca.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Cipendok',
        code: '035',
        category: 'Air',
        location: 'Jawa Tengah',
        description: 'Curug Cipendok adalah air terjun dengan ketinggian 92 meter yang terletak di lereng Gunung Slamet. Curug Cipendok mempunyai daya tarik tersendiri, karena lingkungan masih betul-betul alami. Kesunyian juga masih sangat terasa, sebab belum banyak pelancong yang datang menikmati keindahan alamnya.',
        image: 'https://sikidang.com/wp-content/uploads/Curug-Cipendok.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Cipamingkis',
        code: '036',
        category: 'Air',
        location: 'Jawa Barat',
        description: 'Curug Cipamingkis merupakan tempat pertemuan aliran dua sungai yang melintasi Kabupaten Bogor, yaitu Sungai Cipamingkis dan Sungai Cisarua. Nama Curug Cipamingkis sendiri diambil dari salah satu sumber sungai tersebut.',
        image: 'https://cdn.nativeindonesia.com/foto/curug-cipamingkis/Wahana-Kolam-Renang.jpg'
    })
    await destinationService.createDestination({
        name: 'Raja Ampat',
        code: '037',
        category: 'Pantai',
        location: 'Papua Barat',
        description: 'Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang berdekatan dan berlokasi di barat bagian Kepala Burung Pulau Papua. Secara administrasi, gugusan ini berada di bawah Kabupaten Raja Ampat, Provinsi Papua Barat.',
        image: 'https://asset.kompas.com/crops/ZXmxhiXwfTv2aYF8_QlPdvMYADI=/0x0:720x480/750x500/data/photo/2021/10/31/617e75ab7283d.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Santolo',
        code: '038',
        category: 'Pantai',
        location: 'Jawa Barat',
        description: 'Pantai Santolo adalah sebuah pantai yang terletak di Kecamatan Cikelet, Kabupaten Garut, Jawa Barat, Indonesia. Garut tidak hanya terkenal dengan Jeruk Garut tetapi salah satu pantai yang populer terdapat di Kabupaten Garut yaitu Pantai Santolo.',
        image: 'https://www.pantainesia.com/wp-content/uploads/2018/06/pantai-santolo.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Nasional Bantimurung',
        code: '039',
        category: 'Taman',
        location: 'Sulawesi Selatan',
        description: 'Taman Nasional Bantimurung Bulusaraung juga biasa disebut TN Babul. Kawasan taman nasional ini membentang dari Kabupaten Maros hingga Kabupaten Pangkep, Sulawesi Selatan. Luas lahan yang dimiliki kurang lebih 43.750 hektar dan menyimpan keanekaragaman hayati yang melimpah.',
        image: 'https://cdn.timesmedia.co.id/images/2019/10/29/Taman-Nasional-Bantimurung-Bulusaraung.jpg'
    })
    await destinationService.createDestination({
        name: 'Candi Prambanan',
        code: '040',
        category: 'Candi',
        location: 'Yogyakarta',
        description: 'Candi Prambanan atau Candi Roro Jonggrang adalah kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9 masehi. Candi ini dipersembahkan untuk Trimurti, tiga dewa utama Hindu yaitu dewa Brahma sebagai dewa pencipta, dewa Wisnu sebagai dewa pemelihara, dan dewa Siwa sebagai dewa pemusnah.',
        image: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/08/22/1747449169.jpg'
    })
    await destinationService.createDestination({
        name: 'Candi Borobudur',
        code: '041',
        category: 'Candi',
        location: 'Jawa Tengah',
        description: 'Candi Borobudur atau yang disingkat Borobudur adalah sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah, Indonesia. Candi ini terletak kurang lebih 100 km di sebelah barat daya Semarang, 86 km di sebelah barat Surakarta, dan 40 km di sebelah barat laut Yogyakarta.',
        image: 'https://pict.sindonews.net/dyn/620/pena/news/2021/10/02/768/557306/5-misteri-candi-borobudur-yang-belum-terungkap-hingga-kini-vzq.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Situ Lembang',
        code: '042',
        category: 'Taman',
        location: 'Jakarta',
        description: 'Taman Situ Lembang adalah sebuah taman kota yang terletak di pusat Jakarta. Situ berarti danau yang payau, sedangkan Lembang adalah nama jalan yang berada di dekat taman tersebut. Taman ini merupakan salah satu taman tertua di Jakarta dan memiliki danau kecil yang airnya berasal dari sumber air alam.',
        image: 'https://www.jejakpiknik.com/wp-content/uploads/2017/09/1-@wahyu04061983-630x380.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Sari',
        code: '043',
        category: 'Taman',
        location: 'Yogyakarta',
        description: 'Tamansari, yang berarti taman yang indah, pada mulanya merupakan sebuah taman atau kebun istana Keraton Yogyakarta. Kompleks ini dibangun secara bertahap pada masa Sri Sultan Hamengku Buwono I. Pembangunan dimulai pada tahun 1758 M, ditandai oleh candra sengkala "Catur Naga Rasa Tunggal" yang menunjuk tahun 1684 Jawa.',
        image: 'https://cdn.nativeindonesia.com/foto/taman-sari-jogja/Taman-Sari-Jogja.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Kuta',
        code: '044',
        category: 'Pantai',
        location: 'Bali',
        description: 'Pantai Kuta adalah sebuah tempat pariwisata yang terletak di kecamatan Kuta, sebelah selatan Kota Denpasar, Bali, Indonesia. Daerah ini merupakan sebuah tujuan wisata turis mancanegara dan telah menjadi objek wisata andalan Pulau Bali sejak awal tahun 1970-an.',
        image: 'https://indonesiakaya.com/wp-content/uploads/2020/10/pantai_kuta_bali_1200.jpg'
    })
    await destinationService.createDestination({
        name: 'Lembang Park & Zoo',
        code: '045',
        category: 'Taman',
        location: 'Jawa Barat',
        description: 'Lembang Park and Zoo adalah sebuah objek wisata yang memadukan berbagai macam tema wisata dalam satu kawasan. Luas Lembang Park and Zoo sekitar 20 ha, sehingga dengan luas tersebut mampu menyajikan berbagai macam wahana. Meskipun baru hanya sampai 10 ha yang dapat tertata secara optimal.',
        image: 'https://asset.kompas.com/crops/4uvMnzzclujiISj_eCrKdbkyOFU=/0x90:1080x810/750x500/data/photo/2020/01/26/5e2d3e0492143.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Hutan Raya Ir.H.Djuanda',
        code: '046',
        category: 'Taman',
        location: 'Jawa Barat',
        description: 'Taman Hutan Raya Ir. H. Djuanda merupakan kawasan konservasi yang terpadu antara alam sekunder dengan hutan tanaman dengan jenis Pinus yang terletak di Sub-Daerah Aliran Sungai Cikapundung.',
        image: 'https://modernsocialmagazine.com/wp-content/uploads/2019/08/Indahnya-Taman-Hutan-Raya-Juanda.jpg'
    })
    await destinationService.createDestination({
        name: 'Red Island Beach',
        code: '047',
        category: 'Pantai',
        location: 'Jawa Timur',
        description: 'Pulau Merah atau Pulo Merah adalah sebuah pantai dan objek wisata di Kecamatan Pesanggaran, Kabupaten Banyuwangi, Provinsi Jawa Timur. Pantai ini dikenal karena sebuah bukit hijau kecil dengan tanah berwarna merah yang terletak di dekat bibir pantai. Bukit ini dapat dikunjungi dengan berjalan kaki saat air laut surut. ',
        image: 'https://www.eastjava.com/tourism/banyuwangi/images/pulau-merah.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Parangtritis',
        code: '048',
        category: 'Pantai',
        location: 'Yogyakarta',
        description: 'Pantai Parangtritis adalah tempat wisata yang terletak di Desa Parangtritis, Kapanéwon Kretek, Kabupaten Bantul, Daerah Istimewa Yogyakarta. Jaraknya kurang lebih 27 km dari pusat Kota Yogyakarta. Pantai ini menjadi salah satu destinasi wisata terkenal di Yogyakarta dan telah menjadi ikon pariwisata di Yogyakarta.',
        image: 'https://www.pantainesia.com/wp-content/uploads/2020/04/Pantai-Parangtritis-Yogyakarta.jpg'
    })
    await destinationService.createDestination({
        name: 'Gunung Lalakon',
        code: '049',
        category: 'Gunung',
        location: 'Jawa Barat',
        description: 'Gunung Lalakon merupakan sebuah gunung yang terdapat di Kampung Jelegong, Desa Badaraksa, Kecamatan Kutawaringin, Kabupaten Bandung, Jawa Barat dan memiliki ketinggian 870 meter. Gunung Lalakon terkenal dikarenakan bentuknya yang menyerupai kerucut sempurna atau piramida.',
        image: 'https://correcto.id/content/images/th1_2020102010051989908.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Indrayanti',
        code: '050',
        category: 'Pantai',
        location: 'Yogyakarta',
        description: 'Pantai Indrayanti adalah salah satu tempat wisata pantai di Jogja yang sering direkomendasikan pada wisatawan. Nama pantai Indrayanti sendiri sudah cukup dikenal di kalangan wisatawan baik lokal ataupun manca negara. Sama seperti tipikal pantai selatan di wilayah gunung kidul, pemandangan disini tidak kalah indahnya.',
        image: 'https://jogjacars.com/wp-content/uploads/2020/01/Pantai-Indrayanti-sumber-Camera-Wisata.png'
    })
    await destinationService.createDestination({
        name: 'Pantai Nglambor',
        code: '051',
        category: 'pantai',
        location: 'Yogyakarta',
        description: 'Pantai Nglambor adalah sebuah pantai eksotis yang terletak di Kelurahan Purwodadi, Kecamatan Tepus, Gunung Kidul, Daerah Istimewa Yogyakarta. Lokasinya persis di sebelah barat dari Pantai Siung dan sebelah timur dari Pantai Jogan.',
        image: 'https://img.inews.co.id/media/822/files/inews_new/2020/03/31/IMG_31032020_143523__822_x_430_piksel_.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Kesirat',
        code: '052',
        category: 'Pantai',
        location: 'Yogyakarta',
        description: 'Pantai Kesirat atau Wisata Tanjung Kesirat merupakan salah satu pantai di Gunung Kidul yang memiliki topografi berbeda jika dibandingkan dengan pantai yang ada. Disini kamu tidak akan menyaksikan hamparan pasir yang menghiasi pantai, bahkan bermain air dan berenang pun tidak dapat kamu lakukan. Pantai ini hanya memiliki tebing karang dengan hiasan rumput serta pepohonan yang ada di sekitarnya, posisi lautan ada di bagian bawah tebing.',
        image: 'https://raskita.com/wp-content/uploads/2019/09/Pantai-Kesirat.jpg'
    })
    await destinationService.createDestination({
        name: 'Dago Dreampark',
        code: '053',
        category: 'Taman',
        location: 'Jawa Barat',
        description: 'Dago Dreampark merupakan wisata kekinian di Kota Bandung dengan luas 13 hektar yang mengusung konsep Jawa - Sunda & Bali dengan dilengkapi berbagai fasilitas & wahana yang menarik.',
        image: 'https://img.idxchannel.com/media/500/images/idx/2021/10/14/Dago_Dreampark.jpg'
    })
    await destinationService.createDestination({
        name: 'Water Blaster Bukit Candi Golf',
        code: '054',
        category: 'Air',
        location: 'Jawa Tengah',
        description: 'Water Blaster Semarang Graha Candi Golf merupakan wahana permainan air yang pertama kali berdiri di Semarang dan menjadi andalan rekreasi keluarga warga kota Semarang. Total wahana air yang dimiliki Water Blaster Semarang ini delapan unit. Keutamaan wahana ini memiliki arus luncur dengan ketinggian 25 meter di atas permukaan tanah. Anda dapat meluncur cepat dan berputar sepanjang 230 meter hingga tercebur ke dalam kolam yang segar.',
        image: 'https://2.bp.blogspot.com/-XTMgXVkHPSs/V2our7KuviI/AAAAAAAAEoI/UarKRrS9gvEGid0gkNtvKC7Rd_Wi2AXSgCLcB/w1280-h720-p-k-no-nu/water%2Bblaster%2Bsemarang.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Sungai Mudal',
        code: '055',
        category: 'Taman',
        location: 'Yogyakarta',
        description: 'Taman Sungai Mudal, sebuah objek wisata alam terbuka yang terletak di Kabupaten Kulon Progo, yang menawarkan pesona sebuah kolam pemandian yang bersumber dari mata air alami. Mata airnya bersumber dari sebuah goa, sehingga kehadiran Taman Sungai Mudal menjadi mengesampingkan kesan angker dari sebuah goa. Apalagi ditambah dengan dukungan fasilitas yang membuat para wisatawan merasa nyaman saat berada di sana.',
        image: 'https://ksmtour.com/media/images/articles27/taman-sungai-mudal-kulonprogo-Yogyakarta.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Marina',
        code: '056',
        category: 'Pantai',
        location: 'Jawa Tengah',
        description: 'Pantai Marina adalah salah satu objek wisata pantai yang berada di kota Semarang, Jawa Tengah. Pantai ini menyimpan pemandangan eksotis khas kota Semarang. Dahulu, tempat ini merupakan hutan bakau dan tambak, tapi pemerintah setempat mengubahnya menjadi tempat rekreasi dengan cara reklamasi daratan',
        image: 'https://www.hargatiket.net/wp-content/uploads/2021/03/pantai-marina-semarang-buka-atau-tutup.jpg'
    })
    await destinationService.createDestination({
        name: 'Tempo Gelato Prawirotaman',
        code: '057',
        category: 'Pasar',
        location: 'Yogyakarta',
        description: 'Tempo Gelato ialah gerai es krim paling diburu di Kota Gudeg. Saat ini Tempo Gelato berada di 3 lokasi yang berbeda, yaitu Taman Siswa, Prawirotaman, dan di Jalan Kaliurang. Di tempat ini terdapat banyak varian es krim mulai dari buah-buahan, rempah-rempah bahkan sorbet.',
        image: 'https://phinemo.com/wp-content/uploads/2017/10/tempo-gelato.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Film',
        code: '058',
        category: 'Taman',
        location: 'Jawa Barat',
        description: 'Taman Film adalah salah satu taman tematik dan ruang terbuka publik di Kota Bandung yang terletak di bawah Jembatan Pasupati, Bandung, Jawa Barat. Taman ini diresmikan oleh Wali kota Bandung, Ridwan Kamil, pada tanggal 14 September 2014.',
        image: 'https://sikidang.com/wp-content/uploads/Spot-Wisata-Taman-Film-Bandung.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Siung',
        code: '059',
        category: 'Pantai',
        location: 'Yogyakarta',
        description: 'Pantai Siung adalah suatu objek wisata pantai yang terletak di Kec. Tepus, tepatnya berada di Dusun Duwet, Kelurahan Purwodadi, Kecamatan Tepus, Kabupaten Gunungkidul, provinsi Daerah Istimewa Yogyakarta.',
        image: 'https://piknikwisata.com/wp-content/uploads/2020/02/info-wisata-pantai-siung-jogja.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Ngandong',
        code: '060',
        category: 'Pantai',
        location: 'Yogyakarta',
        description: 'Pantai Ngandong merupakan salah satu pantai yang terdapat di daerah Gunung Kidul, Yogyakarta, selain itu lokasinya bersebelahan dengan Pantai Sundak. Pantai Ngandong memiliki pemandangan alam yang indah, hamparan pasir putihnya berpadu dengan air lautnya yang bersih, serta batuan karang yang ikut menghiasi lautan',
        image: 'https://cdn.nativeindonesia.com/foto/pantai-ngandong/keindahan-pantai-ngandong-ketika-surut.jpg'
    })
    await destinationService.createDestination({
        name: 'NuArt Sculpture Park',
        code: '061',
        category: 'Taman',
        location: 'Jawa Barat',
        description: 'NuArt Sculpture Park merupakan destinasi wisata di Bandung yang memadukan antara unsur seni, budaya dan alam. NuArt Sculpture Park mengahadirkan berbagai macam bentuk patung yang unik dengan imajinasi tinggi. Sehingga, pengunjung yang datang akan terbawa alur imajinasi dari karya Nyoman Nuarta tersebut.',
        image: 'https://statik.tempo.co/data/2020/03/29/id_926794/926794_720.jpg'
    })
    await destinationService.createDestination({
        name: 'The Lodge Maribaya',
        code: '062',
        category: 'Taman',
        location: 'Jawa Barat',
        description: 'The Lodge Maribaya adalah salah satu tempat wisata di Lembang yang menawarkan berbagai hal pada pengunjung. Disini kita bisa melakukan berbagai akitivitas seperti camping, trekking mengelilingi area hutan pinus yang indah, acara gathering dan team building, atau bahkan hanya sekedar refreshing menikmati kuliner.',
        image: 'https://anekatempatwisata.com/wp-content/uploads/2021/05/The-Lodge-Maribaya-klook.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Jungwok',
        code: '063',
        category: 'Pantai',
        location: 'Yogyakarta',
        description: 'Pantai Jungwok adalah pantai yang terletak di Desa Jepitu, Kecamatan Girisubo, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta. Pantai Jungwok merupakan salah satu pantai yang memiliki panorama yang indah dengan pasir putih yang khas dari pantai di Gunung Kidul.',
        image: 'https://www.jejakpiknik.com/wp-content/uploads/2017/05/bb-2-630x380.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Bungkul',
        code: '064',
        category: 'Taman',
        location: 'Jawa Timur',
        description: 'Taman Bungkul adalah taman wisata kota yang terletak di pusat kota Surabaya, tepatnya di Jalan Raya Darmo. Taman ini berdiri di area seluas 900 meter persegi. Dilengkapi berbagai fasilitas penunjang, seperti amfiteater berdiameter 33 meter, lajur joging, lahan papan luncur, taman bermain anak-anak, air mancur, dan pujasera. Selain itu, taman ini juga dilengkapi akses internet nirkabel yang terbuka untuk umum sehingga siapapun bisa mengakses internet selama di taman ini. ',
        image: 'https://cdn1-production-images-kly.akamaized.net/E8648rQFx3FLU2TIIHEWUY8KlZw=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/764274/original/055991500_1415678232-4_ragamnusantara_info.jpg'
    })
    await destinationService.createDestination({
        name: 'Kawah Rengganis Cibuni',
        code: '065',
        category: 'Air',
        location: 'Jawa Barat',
        description: 'Kawah Rengganis merupakan salah satu destinasi wisata di Bandung Selatan tepatnya berada di daerah kawasan Ciwidey, Kawah Rengganis merupakan kawah yang menyajikan keindahan alam yang masih alami, selain itu terdapat sumber air panas dan lumpur alami dari luapan gas yag berasal dari kawah.',
        image: 'https://dolanyok.com/wp-content/uploads/2019/01/Kawah-Rengganis-zainfoto.jpg'
    })
    await destinationService.createDestination({
        name: 'Gunung Papandayan',
        code: '066',
        category: 'Gunung',
        location: 'Jawa Barat',
        description: 'Gunung Papandayan adalah gunung api strato yang terletak di Kabupaten Garut, Jawa Barat tepatnya di Kecamatan Cisurupan. Gunung dengan ketinggian 2665 meter di atas permukaan laut itu terletak sekitar 70 km sebelah tenggara Kota Bandung. Pada Gunung Papandayan, terdapat beberapa kawah yang terkenal.',
        image: 'https://www.jelajahgarut.com/wp-content/uploads/2020/11/Papandayan-2-1024x683.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Balai Kota Bandung',
        code: '067',
        category: 'Taman',
        location: 'Jawa Barat',
        description: 'Taman Balai Kota Bandung merupakan sebuah taman kota yang terletak di Kota Bandung. Taman ini berada di sebelah selatan Balai Kota Bandung. Saat ini, Taman Balai Kota Bandung terdiri dari dua taman yang menyatu, antara lain Taman Dewi Sartika dan Taman Badak.',
        image: 'https://www.pinhome.id/info-area/wp-content/uploads/2022/03/taman-balai-kota-bandung.jpeg'
    })
    await destinationService.createDestination({
        name: 'Pantai Sundak',
        code: '068',
        category: 'Pantai',
        location: 'Yogyakarta',
        description: 'Pantai Sundak merupakan sebuah objek wisata alam berupa Pantai yang berada di daerah Wonosari. Pantai ini terletak sekitar 3 Km dari Pantai Kukup. Meskipun Pantai Sundak tidak terlalu besar, namun pantai ini menyajikan keindahan alam yang alami dan menyenangkan.',
        image: 'https://antarejatour.com/wp-content/uploads/2019/09/Pantai-Sundak-sumber-ig-coco_z.o.e.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Drini',
        code: '069',
        category: 'Pantai',
        location: 'Yogyakarta',
        description: 'Pantai Drini adalah salah satu objek wisata yang terletak di Desa Banjarejo, Kecamatan Tanjungsari,Gunungkidul, Yogyakarta. Letaknya di sebelah timur Pantai Baron dan berjarak sekitar 1 km ke arah timur Pantai Sepanjang. Namun jarak sebenarnya yang harus ditempuh untuk sampai ke pantai ini sejauh 60 km atau sekitar 2-3 jam dari Kota Yogyakarta. ',
        image: 'https://cdn.statically.io/img/catperku.com/f=auto%2Cq=70/wp-content/uploads/Pantai-Drini-ini-adalah-salah-satu-pantai-favorit-saya-Di-Gunungkidul-Jogja.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Baron',
        code: '070',
        category: 'Pantai',
        location: 'Yogyakarta',
        description: 'Pantai Baron adalah salah satu objek wisata berupa pantai yang terletak di Desa Kemadang, Kecamatan Tanjungsari, Kabupaten Gunungkidul. Lokasi Pantai Baron dapat ditempuh 40 km daeri pusat kota Yogyakarta. Asal mula nama Pantai Baron berasal dari nama seorang bangsawan asal Belanda yang bernama Baron Skeber.',
        image: 'https://www.alodiatour.com/wp-content/uploads/2018/10/lokasi-7.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Tilu Leuwi Opat',
        code: '071',
        category: 'Air',
        location: 'Jawa Barat',
        description: 'Curug Tilu Leuwi Opat merupakan salah satu wisata curug di Lembang. Tempatnya sendiri cukup luas. Disini ada area outbond, camping, dan tentunya wisata air terjun dan sungai.Area depan berupa lembah dengan sungai jernih. Biasanya outbond, camping, dan permainan dilakukan di area ini.',
        image: 'https://cdn.nativeindonesia.com/foto/2016/05/curug-tilu-leuwi-opat-lembang-bandung.jpg'
    })
    await destinationService.createDestination({
        name: 'Bukit Jamur',
        code: '072',
        category: 'Taman',
        location: 'Jawa Barat',
        description: 'Bukit Jamur merupakan fenomena alam yang biasa disebut Mushroom Rock, yaitu fenomena di mana batu terkikis oleh angin yang akan membawa dan membuang material-material kecil dari batu tersebut. Bukit Jamur Gresik merupakan salah satu wisata baru yang banyak dikunjungi oleh wisatawan setiap harinya.',
        image: 'https://cdns.klimg.com/merdeka.com/i/w/news/2019/02/26/1054945/content_images/670x335/20190226121606-1-bukit-jamur-rancabolang-002-tantri-setyorini.jpg'
    })


    return sendResponse(res, {
        message: 'Sukses!'
    })
})

const SeederController = {
    destinationSeeder
}

export default SeederController