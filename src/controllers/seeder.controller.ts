import express from 'express';
import ApiError from '../utils/api-error';
import { sendResponse } from '../utils/api';
import httpStatus from 'http-status';
import catchAsync from '../utils/catch-async';
import destinationService from '../services/destination.service';

const destinationSeeder = catchAsync(async (req: express.Request, res:express.Response)=>{
    await destinationService.createDestination({
        name: 'Malioboro',
        code: '001',
        location: 'Yogyakarta', 
        description: 'Jalan Malioboro adalah nama salah satu kawasan jalan dari tiga jalan di Kota Yogyakarta yang membentang dari Tugu Yogyakarta hingga ke perempatan Kantor Pos Yogyakarta. Secara keseluruhan terdiri atas Jalan Margo Utomo, Jalan Malioboro, dan Jalan Margo Mulyo. Jalan ini merupakan poros Garis Imajiner Kraton Yogyakarta',
        image: 'https://id.wikipedia.org/wiki/Berkas:Malioboro_Street,_Yogyakarta.JPG'
    })
    await destinationService.createDestination({
        name: 'Pantai Pangandaran',
        code: '002',
        location: 'Jawa Barat', 
        description: 'Pantai Pangandaran merupakan sebuah objek wisata andalan Kabupaten Pangandaran yang terletak di sebelah tenggara Jawa Barat, tepatnya di Desa Pangandaran dan Pananjung, sekitar 222 km dari selatan Bandung, Kecamatan Pangandaran, Kabupaten Pangandaran, Provinsi Jawa Barat.',
        image: 'https://id.wikipedia.org/wiki/Berkas:Pantai_Pangandaran.jpg'
    })
    await destinationService.createDestination({
        name: 'Dunia Fantasi(Dufan)',
        code: '003',
        location: 'Jakarta', 
        description: 'Dufan atau disebut juga Dunia Fantasi adalah sebuah theme park yang terletak di kawasan Taman Impian Jaya Ancol, Jakarta Utara, Indonesia yang diresmikan dan dibuka untuk umum pada tanggal 29 Agustus 1985',
        image: 'https://www.wowkeren.com/display/images/photo/2019/09/02/00271060_1.jpghttps://www.wowkeren.com/display/images/photo/2019/09/02/00271060_1.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Mini Indonesia Indah (TMII)',
        code: '004',
        location: 'Jakarta', 
        description: 'Taman Mini Indonesia Indah merupakan suatu kawasan taman wisata bertema budaya Indonesia di Jakarta Timur. Area seluas kurang lebih 150 hektare atau 1,5 kilometer persegi ini terletak pada koordinat 6°18′6.8″LS,106°53′47.2″BT.',
        image: 'https://jadwaltravel.com/wp-content/uploads/2019/11/https___www.instagram.com_p_BhOPpmAnqj7_.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Safari Bogor',
        code: '005',
        location: 'Jawa Barat', 
        description: 'Taman Safari Indonesia adalah tempat wisata keluarga berwawasan lingkungan yang berorientasi pada habitat satwa di alam bebas. Taman Safari Indonesia terletak di Desa Cibeureum Kecamatan Cisarua, Kabupaten Bogor, Jawa Barat atau yang lebih dikenal dengan kawasan Puncak.',
        image: 'https://pinhome-blog-assets-public.s3.amazonaws.com/2021/08/taman-safari-bogor-hotel-1.jpg'
    })
    await destinationService.createDestination({
        name: 'Gunung Bromo',
        code: '006',
        location: 'Jawa Timur', 
        description: 'Gunung Bromo atau dalam bahasa Tengger dieja "Brama", juga disebut Kaldera Tengger, adalah sebuah gunung berapi aktif di Jawa Timur, Indonesia.',
        image: 'https://statik.tempo.co/data/2019/05/21/id_843378/843378_720.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Pandawa',
        code: '007',
        location: 'Bali', 
        description: 'Pantai Pandawa adalah salah satu kawasan wisata di area Kuta selatan, Kabupaten Badung, Bali. Pantai ini terletak di balik perbukitan dan sering disebut sebagai Pantai Rahasia. Di sekitar pantai ini terdapat dua tebing yang sangat besar yang pada salah satu sisinya dipahat lima patung Pandawa dan Kunti.',
        image: 'https://koran-jakarta.com/images/article/pantai-pandawa-destinasi-hits-di-bali-selatan-220421144844.jpg'
    })
    await destinationService.createDestination({
        name: 'Danau Toba',
        code: '008',
        location: 'Sumatera Utara', 
        description: 'Danau Toba adalah danau alami berukuran besar di Indonesia yang berada di kaldera Gunung Supervulkan. Danau ini memiliki panjang 100 kilometer, lebar 30 kilometer, dan kedalaman 505 meter. Danau ini terletak di tengah pulau Sumatra bagian utara dengan ketinggian permukaan sekitar 900 meter',
        image: 'https://img.inews.co.id/media/822/files/inews_new/2021/09/03/danau_toba.jpg'
    })
    await destinationService.createDestination({
        name: 'Lombok',
        code: '009',
        location: 'Nusa Tenggara Barat', 
        description: 'Pulau Lombok adalah sebuah pulau di kepulauan Sunda Kecil atau Nusa Tenggara yang terpisahkan oleh Selat Lombok dari Bali di sebelah barat dan Selat Alas di sebelah timur dari Sumbawa. Pulau ini kurang lebih berbentuk bulat dengan semacam "ekor" di sisi barat daya yang panjangnya kurang lebih 70 km',
        image: 'https://www.weseektravel.com/wp-content/uploads/2019/10/MAWUN-BEACH-LOMBOK-INDONESIA--712x768.jpg'
    })
    await destinationService.createDestination({
        name: 'Ubud',
        code: '010',
        location: 'Bali', 
        description: 'Kota Ubud, terletak di bagian tengah pulau Bali, Indonesia, dikenal sebagai pusat tarian dan kerajinan tradisional. Hutan hujan dan terasering padi yang mengelilingi kawasan Ubud, ditambah pura dan tempat pemujaan, merupakan salah satu lanskap Bali yang paling terkenal. Terdapat situs suci kuno, yaitu Goa Gajah yang memiliki ukiran serba mendetail dan Gunung Kawi, yaitu tempat pemujaan yang diukir dari batu',
        image: 'https://twomonkeystravelgroup.com/wp-content/uploads/2021/01/DIY-Travel-Guide-to-Ubud-Bali-Indonesia-03.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Langit',
        code: '011',
        location: 'Jawa Barat', 
        description: 'Taman Langit Pangalengan 360 merupakan destinasi wisata panorama dan taman perkemahan ( Panoramic and Camp Ground Spot ), terletak di Perkebunan Cukul Desa Sukaluyu, Kecamatan Pangalengan, Kabupaten Bandung - Jawa Barat berada diketinggian 1650-1660 mdpl. Taman Langit Pangalengan 360 menyajikan pemandangan alam di perbatasan Bandung Selatan dan Garut Selatan dan Juga sebagian Kota Bandung.',
        image: 'https://asset.kompas.com/crops/b1xj-5QcMgQM9GRqUehmpgLwIeA=/49x2:679x422/750x500/data/photo/2022/01/04/61d432eabcf26.jpg'
    })
    await destinationService.createDestination({
        name: 'Kawah Putih',
        code: '012',
        location: 'Jawa Barat', 
        description: 'Kawah Putih adalah sebuah tempat wisata di Jawa Barat yang terletak di Desa Alam Endah, Kecamatan Rancabali, Kabupaten Bandung Jawa Barat yang terletak di kaki Gunung Patuha. Kawah putih merupakan sebuah danau yang terbentuk dari letusan Gunung Patuha.',
        image: 'https://awsimages.detik.net.id/community/media/visual/2022/05/03/kawasan-wisata-kawah-putih-2_169.jpeg?w=700&q=90'
    })
    await destinationService.createDestination({
        name: 'Green Canyon Pangandaran',
        code: '013',
        location: 'Jawa Barat', 
        description: 'Cukang Taneuh atau Green Canyon adalah salah satu objek wisata di Jawa Barat yang terletak di Desa Kertayasa Kecamatan Cijulang, Kabupaten Pangandaran. Objek wisata ini berjarak ± 31 km dari Pangandaran.',
        image: 'https://cdn-cas.orami.co.id/parenting/images/Green-Canyon-Indonesia-1.width-800.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Cikaso',
        code: '014',
        location: 'Jawa Barat', 
        description: 'Air Terjun Cikaso, adalah merupakan salahsatu air terjun yang terletak di selatan Kabupaten Sukabumi. Air terjun ini juga dikenal sebagai Curug Luhur, tetapi nama Curug Cikaso lebih dikenal masyarakat sekitar dikarenakan aliran airnya berasal dari anak Sungai Cikaso yaitu Sungai Cicurug',
        image: 'https://camerawisata.com/wp-content/uploads/2018/09/Pemandangan-Curug-Cikaso-Sukabumi.png'
    })
    await destinationService.createDestination({
        name: 'Kepulauan Seribu',
        code: '015',
        location: 'Jakarta', 
        description: 'Kepulauan Seribu merupakan salah satu wilayah yang masuk ke dalam administrasi Pemerintah Provinsi DKI Jakarta. Secara geografis, Kepulauan Seribu memiliki total wilayah seluas 4.745,62 km2 yang terdiri dari 8,76 km2 daratan, dan terdiri lebih dari 110 pulau.',
        image: 'https://pulauseribu.co.id/wp-content/uploads/cottage-pulau-seribu-murah-915x480.jpg'
    })
    await destinationService.createDestination({
        name: 'Cukul Sunrise Point',
        code: '016',
        location: 'Jawa Barat', 
        description: 'Untuk sunrise point di Cukul ini berupa area bukit dengan ketinggian 1600 meter di atas permukaan laut. Di area bukit tidak hanya menyediakan tempat terbaik untuk menyaksikan pesona alam matahari terbit.',
        image: 'https://awsimages.detik.net.id/community/media/visual/2018/06/16/434e9c8a-a1a9-489a-b9f7-3f7ebdc17b42_169.jpeg?w=620'
    })
    await destinationService.createDestination({
        name: 'Grafika Cikole',
        code: '017',
        location: 'Jawa Barat', 
        description: 'Terminal wisata grafika cikole adalah tempat wisata, restoran serta penginapan di lembang yang berada di kaki gunung dengan ketinggian 1400 meter di atas permukaan laut. Udara yang sejuk dengan suhu 20 derajat celcius dan kontur area Terminal Wisata Grafika Cikole yang berbukit dikelilingi hutan pinus di area seluas 9 hektar merupakan tempat wisata di bandung lembang yang tepat untuk menyelenggrakan aktifitas outbound bagi keluarga, instansi, sekolah dan keluarga.',
        image: 'https://lh3.googleusercontent.com/pw/AM-JKLWbfHOa0RIz96n1nFMvtZchkdgIz9Cg6E4jBQwMzMPSKWvQCj7WszOmyxzuBnqL0gcL8Bxw0DMlJn6TRkQ_Dweoe-9bn6wi52oMUWLsFEvA9ta83w3mhQ-mck0DiNfcHSu_5HR8G0qN4LIt0VfmJBxD=w1429-h953-no'
    })
    await destinationService.createDestination({
        name: 'Rancabali Glamping',
        code: '018',
        location: 'Jawa Barat', 
        description: 'Glamping Lakeside Rancabali adalah tempat wisata yang bernuansa alam. Di sekitar area ini dikelilingi oleh pemandangan perkebunan teh hijau yang sangat luar biasa indahnya.',
        image: 'https://www.hargatiket.net/wp-content/uploads/2019/01/harga-tiket-glamping-lakeside-rancabali.jpg'
    })
    await destinationService.createDestination({
        name: 'Nusa Penida',
        code: '019',
        location: 'Bali', 
        description: 'Nusa Penida adalah sebuah pulau bagian dari negara Republik Indonesia yang terletak di sebelah tenggara Bali yang dipisahkan oleh Selat Badung. Di dekat pulau ini terdapat juga pulau-pulau kecil lainnya yaitu Nusa Ceningan dan Nusa Lembongan.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f5/3e/e5/nusa-penida-island.jpg?w=1200&h=-1&s=1'
    })
    await destinationService.createDestination({
        name: 'Labuan Bajo',
        code: '020',
        location: 'Nusa Tenggara Timur', 
        description: 'Labuan Bajo merupakan salah satu kota yang berada di kecamatan Komodo, Kabupaten Manggarai Barat, provinsi Nusa Tenggara Timur, Indonesia. Kota Labuan Bajo juga merupakan ibu kota dari kecamatan Kecamatan Komodo dan ibu kota Kabupaten Manggarai Barat. Sedang diwacanakan pengembangan Kota Labuan Bajo.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/c6/labuan-bajo.jpg?w=700&h=500&s=1'
    })
    await destinationService.createDestination({
        name: 'Simpang Lima Gumul',
        code: '021',
        location: 'Jawa Timur', 
        description: 'Monumen Simpang Lima Gumul atau biasa disingkat SLG adalah salah satu bangunan yang menjadi ikon Kabupaten Kediri yang bentuknya menyerupai Arc de Triomphe yang berada di Paris, Prancis. SLG mulai dibangun pada tahun 2003 dan diresmikan pada tahun 2008, yang digagas oleh Bupati Kediri saat itu, Sutrisno.',
        image: 'https://i.pinimg.com/736x/6c/0f/22/6c0f229eb61f169549cb7224d9695aa5.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Tanjung Lesung',
        code: '022',
        location: 'Banten', 
        description: 'Pantai Tanjung Lesung yang terletak di Desa Tanjung Jaya, Kecamatan Panimbang, Kabupaten Pandeglang, Provinsi Banten. Pantai yang menghadap ke Samudra Hindia ini berada sedikit menjorok ke laut yang terlihat seperti lesung (alat penumbuk padi). Karena bentuknya tersebut, pantai ini akhirnya dinamakan Lesung.',
        image: 'https://cdn-2.tstatic.net/travel/foto/bank/images/pantai-tanjung-lesung-banten.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Srakung',
        code: '023',
        location: 'Yogyakarta', 
        description: 'Pantai Srakung berlokasi di Desa Pucung, Kecamatan Girisubo, Kabupaten Gunungkidul, DIY. Lokasi pantai ini searah dengan Pantai Sadeng. Jadi jika ke Pantai Srakung bisa sekalian ke Pantai Sadeng.',
        image: 'http://www.pegipegi.com/travel/wp-content/uploads/2014/04/srakung6.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Sawarna',
        code: '024',
        location: 'Banten', 
        description: 'Desa Wisata Sawarna adalah sebuah Desa wisata di Kecamatan Bayah, Kabupaten Lebak, Banten. Desa Sawarna berbatasan langsung dengan Samudera Hindia, di sisi selatan sehingga Desa Sawarna merupakan kawasan pesisir pantai.',
        image: 'https://piknikwisata.com/wp-content/uploads/2019/11/info-lengkap-wisata-pantai-sawarna.jpg'
    })
    await destinationService.createDestination({
        name: 'Tebing Breksi',
        code: '025',
        location: 'Yogyakarta', 
        description: 'Tebing Breksi merupakan tempat wisata yang berada di wilayah Kabupaten Sleman. Lokasinya berada di sebelah selatan Candi Prambanan dan berdekatan dengan Candi Ijo serta Kompleks Keraton Boko. Lokasi Wisata Tebing Breksi tepatnya berada di Desa Sambirejo, Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55572.',
        image: 'https://asset.kompas.com/crops/5ZBaogQARv8odjFn3ktbP1zZAKk=/0x0:739x493/750x500/data/photo/2021/03/09/60470c6b30f8c.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Safari Pasuruan',
        code: '026',
        location: 'Jawa Timur', 
        description: 'Taman Safari Indonesia 2 adalah salah satu safari park terluas di Asia, yang terletak di lereng Gunung Arjuno, Kecamatan Prigen, Kabupaten Pasuruan, Jawa Timur.',
        image: 'https://cdn-2.tstatic.net/travel/foto/bank/images/sejumlah-satwa-di-taman-safari-prigen-kamis-322022.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Laut Bunaken',
        code: '027',
        location: 'Sulawesi Utara', 
        description: 'Taman Nasional Bunaken adalah taman laut yang terletak di Sulawesi Utara, Indonesia. Taman ini terletak di Segitiga Terumbu Karang yang menjadi habitat bagi 390 spesies terumbu karang dan juga berbagai spesies ikan, moluska, reptil, dan mamalia laut',
        image: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2020/01/ikan-laut-1.jpg'
    })
    await destinationService.createDestination({
        name: 'Pulau Padar',
        code: '028',
        location: 'Nusa Tenggara Timur', 
        description: 'Pulau Padar adalah pulau ketiga terbesar di kawasan Taman Nasional Komodo, setelah Pulau Komodo dan Pulau Rinca. Pulau ini relatif lebih dekat ke Pulau Rinca daripada ke Pulau Komodo, yang dipisahkan oleh Selat Lintah. Pulau Padar tidak dihuni oleh ora. Di sekitar pulau ini terdapat pula tiga atau empat pulau kecil.',
        image: 'https://awsimages.detik.net.id/community/media/visual/2019/01/18/327bf7c6-c6f2-4b6c-803a-f0c566fc08ff_169.jpeg?w=780&q=90'
    })
    await destinationService.createDestination({
        name: 'Pantai Tempora',
        code: '029',
        location: 'Jawa Timur', 
        description: 'Pantai Tampora yang terletak di Desa Kalianget, Kecamatan Banyuglugur, Kabupaten Situbondo Propinsi Jawa Timur ini memiliki pasir putih serta terdapat tebing bebatuan. Pantai tampora terletak di balik bukit dimana pohon-pohon rimbun menjadi nilai plus bagi wisatawan untuk menikmati keindahan pantai ini.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/31/3b/3b/pantai-tampora.jpg?w=1200&h=1200&s=1'
    })
    await destinationService.createDestination({
        name: 'Pantai Surumanis',
        code: '030',
        location: 'Jawa Tengah', 
        description: 'Pantai Surumanis Kebumen adalah pantai dengan pasir pantai berwarna hitam kecoklatan dengan batu karang besar disekelilingnya. Pantai ini berada pada daerah tersembunyi dan harus melewati Pantai Pecaron terlebih dahulu untuk menjangkaunya.',
        image: 'https://sikidang.com/wp-content/uploads/Pantai-Surumanis-Pantai-Surumanis.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Kasap',
        code: '031',
        location: 'Jawa Timur', 
        description: 'Pantai Kasap merupakan salah satu pantai di paitan. Secara administratif terletak di wilayah Kecamatan Pringkuku tepatnya di Dusun Ketro, Desa Watukarung. Pantai Kasap penampakannya mirip dengan Kabupaten Raja Ampat yang memiliki pulau pulau kecil di tengah laut.',
        image: 'https://www.pantainesia.com/wp-content/uploads/2018/07/pantai-kasap.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Gesing',
        code: '032',
        location: 'Yogyakarta', 
        description: 'Pantai Gesing memiliki pasir putih dan ombak yang kecil sehingga cocok untuk wisata keluarga dan bermain air. Hal yang menarik dari pantai ini adalah gradasi permukaan air dari warna hijau terang ke warna biru menambah keindahan Pantai Gesing.',
        image: 'https://awsimages.detik.net.id/community/media/visual/2020/03/03/c82b7a02-2962-4e47-a187-fe77d41fe2b9_169.jpeg?w=780&q=90'
    })
    await destinationService.createDestination({
        name: 'Pantai Balekambang',
        code: '033',
        location: 'Jawa Timur', 
        description: 'Pantai Balekambang adalah sebuah pantai di pesisir selatan yang terletak di tepi Samudra Indonesia secara administratif masuk wilayah Dusun Sumber Jambe, Desa Srigonco, Kecamatan Bantur, Kabupaten Malang, Jawa Timur dan merupakan salah satu wisata di Kabupaten Malang sejak 1985 hingga kini.',
        image: 'https://media.suara.com/pictures/653x366/2021/09/17/43570-pantai-balekambang-malang-instagramatbalekambangmalang.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Air Manis',
        code: '034',
        location: 'Sumatera Barat', 
        description: 'Pantai Air Manis adalah pantai yang terletak kurang lebih 10 km ke selatan dari pusat Kota Padang. Lokasinya Berada di belakang Gunung Padang atau tepatnya di Kecamatan Padang Selatan, Kota Padang. Pantai ini merupakan salah satu tujuan wisata populer yang selalu ramai dikunjungi oleh masyarakat',
        image: 'https://pariwisata.padang.go.id/uploads/images/image_default_5e50303d895ca.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Cipendok',
        code: '035',
        location: 'Jawa Tengah', 
        description: 'Curug Cipendok adalah air terjun dengan ketinggian 92 meter yang terletak di lereng Gunung Slamet. Curug Cipendok mempunyai daya tarik tersendiri, karena lingkungan masih betul-betul alami. Kesunyian juga masih sangat terasa, sebab belum banyak pelancong yang datang menikmati keindahan alamnya.',
        image: 'https://sikidang.com/wp-content/uploads/Curug-Cipendok.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Cipamingkis',
        code: '036',
        location: 'Jawa Barat', 
        description: 'Curug Cipamingkis merupakan tempat pertemuan aliran dua sungai yang melintasi Kabupaten Bogor, yaitu Sungai Cipamingkis dan Sungai Cisarua. Nama Curug Cipamingkis sendiri diambil dari salah satu sumber sungai tersebut.',
        image: 'https://cdn.nativeindonesia.com/foto/curug-cipamingkis/Wahana-Kolam-Renang.jpg'
    })
    await destinationService.createDestination({
        name: 'Raja Ampat',
        code: '037',
        location: 'Papua Barat', 
        description: 'Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang berdekatan dan berlokasi di barat bagian Kepala Burung Pulau Papua. Secara administrasi, gugusan ini berada di bawah Kabupaten Raja Ampat, Provinsi Papua Barat.',
        image: 'https://asset.kompas.com/crops/ZXmxhiXwfTv2aYF8_QlPdvMYADI=/0x0:720x480/750x500/data/photo/2021/10/31/617e75ab7283d.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Santolo',
        code: '038',
        location: 'Jawa Barat', 
        description: 'Pantai Santolo adalah sebuah pantai yang terletak di Kecamatan Cikelet, Kabupaten Garut, Jawa Barat, Indonesia. Garut tidak hanya terkenal dengan Jeruk Garut tetapi salah satu pantai yang populer terdapat di Kabupaten Garut yaitu Pantai Santolo.',
        image: 'https://www.pantainesia.com/wp-content/uploads/2018/06/pantai-santolo.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Nasional Bantimurung',
        code: '039',
        location: 'Sulawesi Selatan', 
        description: 'Taman Nasional Bantimurung Bulusaraung juga biasa disebut TN Babul. Kawasan taman nasional ini membentang dari Kabupaten Maros hingga Kabupaten Pangkep, Sulawesi Selatan. Luas lahan yang dimiliki kurang lebih 43.750 hektar dan menyimpan keanekaragaman hayati yang melimpah.',
        image: 'https://cdn.timesmedia.co.id/images/2019/10/29/Taman-Nasional-Bantimurung-Bulusaraung.jpg'
    })
    
    return sendResponse(res, {
        message: 'Sukses!'
    })
})

const SeederController={
    destinationSeeder
}

export default SeederController