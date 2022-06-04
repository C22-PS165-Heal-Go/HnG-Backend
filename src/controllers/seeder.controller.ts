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
        category:'xxxx', 
        location: 'Sulawesi Selatan', 
        description: 'Taman Nasional Bantimurung Bulusaraung juga biasa disebut TN Babul. Kawasan taman nasional ini membentang dari Kabupaten Maros hingga Kabupaten Pangkep, Sulawesi Selatan. Luas lahan yang dimiliki kurang lebih 43.750 hektar dan menyimpan keanekaragaman hayati yang melimpah.',
        image: 'https://cdn.timesmedia.co.id/images/2019/10/29/Taman-Nasional-Bantimurung-Bulusaraung.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Suropati',
        code: '073',
        category:'Taman', 
        location: 'Jakarta', 
        description: 'Taman Suropati (awalnya bernama Burgemeester Bisschopplein) adalah nama sebuah taman di Jakarta. Taman Suropati menjadi sebuah taman yang penting di Jakarta karena terdapat enam monumen Perhimpunan Bangsa-Bangsa Asia Tenggara. Monumen-monumen tersebut dibuat oleh masing-masing seniman dari enam negara pendiri ASEAN.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/2a/37/82/photo5jpg.jpg?w=1200&h=-1&s=1'
    })
    await destinationService.createDestination({
        name: 'Sky Rink, Mall Taman Anggrek',
        code: '074',
        category:'Taman', 
        location: 'Jakarta', 
        description: 'Salah satu arena ice-skating ini merupakan salah satu arena terluas di Asia Tenggara dengan luas mencapai 1.248 m2. Jangan khawatir jika kamu masih pemula, di sini selain disediakan arena bermain ice-skating juga disediakan pula tempat penyewaan sepatu dan peralatan untuk bermain.',
        image: 'https://asset.kompas.com/crops/aovWzNKI1HODMP3orscCNahzles=/0x0:592x296/750x500/data/photo/2022/03/17/6232c36c40c8d.png'
    })
    await destinationService.createDestination({
        name: 'Pantai Krakal',
        code: '075',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Pantai Krakal merupakan pantai yang terbentuk dari proses geologi di kawasan perbukitan kars Gunung Kidul. Nama “KERAKAL” dalam bahasa Jawa berarti batu-batuan kecil yang tersebar.',
        image: 'https://2.bp.blogspot.com/-9cyhohk2NAc/VlMaeE-sq3I/AAAAAAAAHRU/83DpLCvJwDI/s1600/pantai-krakal.jpg'
    })
    await destinationService.createDestination({
        name: 'Farm House Susu Lembang',
        code: '076',
        category:'Taman', 
        location: 'Jawa Barat', 
        description: 'Farmhouse Lembang Bandung merupakan wahana wisata baru yang terdapat di Lembang, berdiri dan dibuka sejak bulan Desember 2015. Farmhouse Lembang Bandung memang sangat cocok untuk dijadikan wisata keluarga anda, karena selain pemandangannya yang indah, tempat yang strategis juga didukung oleh konsep wisata yang modern.',
        image: 'https://3.bp.blogspot.com/-LTZwc5UTvZU/VshlKtOIW5I/AAAAAAAAA38/m6SyrEmpXsU/s1600/farmhouse%2Blembang%2B1.png'
    })
    await destinationService.createDestination({
        name: 'Pantai Samas',
        code: '077',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Pantai Samas merupakan salah satu pantai yang berada di deretan pantai sebelah timur Pantai Parangtritis. Pantai Samas terkenal dengan deburan ombaknya yang menggulung, angin lautnya yang kencang dan sebagai tempat persinggahan penyu-penyu langka seperti penyu sisik dan penyu hijau untuk bertelur.',
        image: 'https://jelajah-api.bantulkab.go.id/files/content/20a389a8be21e06431d7d590b44619f5.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Pulang Sawal',
        code: '078',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Pantai Pulang Sawal atau banyak yang menyebutnya dengan Pantai Indrayanti menawarkan panorama yang indah dengan hamparan pasir putihnya yang memukau. Air lautnya juga jernih sehingga tak kalah dengan pantai lain yang ada di Gunung Kidul.',
        image: 'https://indonesiatraveler.id/wp-content/uploads/2020/11/Pantai-Pulang-Sawal-Photo-by-Wikipedia.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Pok Tunggal',
        code: '079',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Pantai Pok Tunggal atau biasa disebut "the hidden paradise" (surga yang tersembunyi). Nama Pantai Pok Tunggal diambil karena dipantai tersebut terdapat sebuah pohon duras tua yang berdiri kokoh hingga saat ini.  Uniknya, pantai ini memiliki aliran sungai air tawar dibawah tanah yang menjadi sumber kehidupan bagi masyarakat sekitar pantai.',
        image: 'https://piknikwisata.com/wp-content/uploads/2019/12/pantai-pok-tunggal-e1574332793270.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Depok',
        code: '080',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Pantai Depok merupakan salah satu pantai dengan pemandangan eksotis yang ada di Yogyakarta. Pantai di Yogya ini semakin menarik perhatian karena keindahan alamnya yang semakin memesona.',
        image: 'https://jurnalpost.com/wp-content/uploads/2016/05/Pantai-Depok.jpg'
    })
    await destinationService.createDestination({
        name: 'Gunung Tangkuban Perahu',
        code: '081',
        category:'Gunung', 
        location: 'Jawa Barat', 
        description: 'Gunung Tangkuban Parahu terbentuk sekitar 90.000 tahun lalu di Kaldera Sunda. Gunung Tangkuban Parahu ini termasuk gunung api aktif yang statusnya diawasi terus oleh Direktorat Vulkanologi Indonesia. Beberapa kawahnya masih menunjukkan tanda tanda keaktifan gunung ini.',
        image: 'https://img.inews.co.id/media/822/files/inews_new/2020/03/12/IMG_12032020_142215__822_x_430_piksel_.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Hutan Raya Ir. H. Juanda',
        code: '082',
        category:'Taman', 
        location: 'Jawa Barat', 
        description: 'Taman Hutan Raya Ir. H. Djuanda (Tahura Djuanda) merupakan kawasan konservasi yang terpadu antara alam sekunder dengan hutan tanaman dengan jenis Pinus (Pinus merkusil). Taman terbesar yang pernah dibangun oleh Pemerintah Hindia Belanda ini pada awalnya merupakan hutan lindung dengan nama Hutan Lindung Pulosari.',
        image: 'https://1.bp.blogspot.com/-a5FyQZGibaI/YAUzIv6BWCI/AAAAAAAAAME/7nILEExS5TE7ZFhWuEFbBuV5whZ4Qri_wCLcBGAsYHQ/s1277/1.PNG'
    })
    await destinationService.createDestination({
        name: 'Taman Cattleya',
        code: '083',
        category:'Taman', 
        location: 'Jakarta', 
        description: 'Taman Cattleya adalah satu dari sekian banyak Ruang Terbuka Hijau (RTH) yang dimiliki oleh Pemrov DKI Jakarta. Kehadiran Taman Cattleya tentu saja sangat bermanfaat bagi masyarakat Ibu Kota, ditengah situasi penatnya kemacetan, tumpukkan pekerjaan, serta polusi yang menjadi ancaman bagi kota-kota besar.',
        image: 'https://cdn.nativeindonesia.com/foto/taman-cattleya/Taman-Sejuk-Di-Tengah-Kota.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Cipanas',
        code: '084',
        category:'Air', 
        location: 'Jawa Barat', 
        description: 'Curug Cipanas Nagrak merupakan air terjun dengan air belerang bersuhu hangat yang bersumber dari Gunung Tangkuban Parahu. Pancaran airnya membentuk air terjun dalam kolam di bawahnya yang kemudian dibendung menjadi pemandian air panas.',
        image: 'https://sanjayatour.com/wp-content/uploads/2020/04/Curug-Cipanas-Nagrak-Kancah-Bandung.jpg'
    })
    await destinationService.createDestination({
        name: 'Candi Sewu',
        code: '085',
        category:'Candi', 
        location: 'Yogyakarta', 
        description: 'Candi Sewu atau Manjusrighra adalah candi Buddha yang dibangun pada abad ke-8 Masehi yang berjarak sekitar delapan ratus meter di sebelah utara Candi Prambanan. Aslinya terdapat 249 bangunan candi di kompleks ini yang disusun membentuk mandala wajradhatu, perwujudan alam semesta dalam kosmologi Buddha Mahayana.',
        image: 'https://3.bp.blogspot.com/-K2-UaVW24TU/XDpx2lCpDRI/AAAAAAAABXY/ADIRhx_Vo28mjE6lUif5l8Vd8Nbc719VgCLcBGAs/s1600/wisata%2Bcandi%2Bsewu.jpg'
    })
    await destinationService.createDestination({
        name: 'Tebing Keraton',
        code: '086',
        category:'Taman', 
        location: 'Jawa Barat', 
        description: 'Tebing Keraton atau Tebing Karaton merupakan sebuah tebing yang berada di dalam kawasan Taman Hutan Raya Ir. H. Djuanda. Anda bisa menyaksikan hijaunya pemandangan Taman Hutan Raya Ir. H. Djuanda yang menghampar luas sepanjang mata memandang. Pemandangan ini pun akan bertambah indah, jika anda datang sebelum matahari terbit atau kira-kira jam 6 pagi.',
        image: 'https://i0.wp.com/kelloggsnyc.com/wp-content/uploads/2019/09/tebing-keraton.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Keputran',
        code: '087',
        category:'Taman', 
        location: 'Jawa Timur', 
        description: 'Berada di Jalan Kayoon No 80 Kaliasin Surabaya. Taman Keputran lokasinya menyatu dengan Kalimas Surabaya. Jika Anda ingin menikmati waktu dengan duduk santai ditepi sungai cocok sekali jika Anda berkunjung ke taman ini di pagi atau sore hari.',
        image: 'https://img.okezone.com/content/2022/02/16/408/2548236/27-taman-di-surabaya-yang-wajib-dikunjungi-IPmDa7wQhO.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Timang',
        code: '088',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Pantai Timang memiliki sebuah pulau yang berada di tengah lautan, yang bernama Pulau Timang atau Pulau Watu Panjang. Inilah yang menjadi daya tarik utama dari pantai yang satu ini.',
        image: 'https://eksotisjogja.com/wp-content/uploads/2016/08/pantai-timang-tepus-gunung-kidul.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Ria Kenjeran',
        code: '089',
        category:'Pantai', 
        location: 'Jawa Timur', 
        description: 'Kamu dapat menikmati keindahan Pantai Kenjeran Surabaya sambil wisata kuliner, menikmati keindahan sunset dan sunrise, dan juga berlayar menikmati pemandangan menggunakan perahu. Pemandangan yang terdapat di pantai ini memang sangat menyatu dengan kondisi alam sehingga dapat membuat perasaanmu jauh lebih rileks.',
        image: 'https://www.pantainesia.com/wp-content/uploads/2021/01/Pantai-Ria-Kenjeran-Surabaya.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Ngrawe',
        code: '090',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Daya tarik yang dimiliki Pantai Ngrawe sehingga mampu menjaring wisatawan dari berbagai daerah seperti deburan ombak, taman yang menyejukkan, hunting foto.',
        image: 'https://wisatamilenial.com/wp-content/uploads/2020/01/View-Pantai-Ngrawe-Dari-Atas-Arah-Taman-Image-From-@arif_josselalu.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Baruna',
        code: '091',
        category:'Pantai', 
        location: 'Jawa Tengah', 
        description: 'Berbeda dengan pantai lain yang hanya terdiri dari hamparan pasir, Pantai Baruna memiliki hamparan padang ilalang luas hingga sejauh mata memandang hanya ada rerumputan dan pepohonana dikejauhan. Namun, Pantai Baruna ini sayang untuk dilewatkan karena pemandangan alamnya yang memukau.',
        image: 'https://infobudayaindonesia.com/wp-content/uploads/2017/01/Keindahan-Pantai-Baruna-Semarang-800x480.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Luhur',
        code: '092',
        category:'Air', 
        location: 'Jawa Barat', 
        description: 'Curug Luhur memiliki sajian bermain air yang berbeda dibandingkan dengan curug-curug yang ada di Bogor. Lokasinya didesain sedemikian rupa, sehingga terciptalah sebuah waterboom dengan hiasan air terjun yang cukup deras.',
        image: 'https://wisatakaka.com/wp-content/uploads/2018/12/Harga-Tiket-Masuk-Curug-Luhur-Bogor-Terbaru.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Pintar',
        code: '093',
        category:'Taman', 
        location: 'Yogyakarta', 
        description: 'Taman Pintar adalah tempat rekreasi edukasi yang keren dan seru di Jogja. Wahananya ada planetarium, wahana bahari, zona pengolahan sampah, science theater, playground, perpustakaan, kampung kerajinan, gedung oval, dll.',
        image: 'https://petualangmuda.com/wp-content/uploads/2022/01/Taman-Pintar-Yogyakarta-bisniswisata-co-id.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Indonesia Kaya',
        code: '094',
        category:'Taman', 
        location: 'Jawa Tengah', 
        description: 'Taman yang dahulu dikenal sebagai Taman KB ini bertempat di Jl. Menteri Soepeno, Semarang ini telah dipugar dan diberikan fasilitas-fasilitas baru yang dapat mendukung aktivitas masyarakat.',
        image: 'https://t-2.tstatic.net/tribunjatengwiki/foto/bank/images/tik.jpg'
    })
    await destinationService.createDestination({
        name: 'Bukit Panguk Kediwung',
        code: '095',
        category:'Gunung', 
        location: 'Yogyakarta', 
        description: 'Bukit Panguk Kediwung merupakan salah satu tempat wisata untuk berrburu hunting foto di Jogja. Keberadaan tempat wisata kekinian di jogja ini yang menghadap kearah timur, hal ini sangat cocok untuk tempat berburu sunrise. Waktu yang sangat pas untuk mengunjungi Bukit Panguk Kediwung adalah pada pukul 05.00 pagi.',
        image: 'https://1.bp.blogspot.com/-ggUK194zHg0/XVqVvi-sgqI/AAAAAAAACgk/oPFc0dx_RAkEFnxG6hsBi7RUvPELRIcFQCLcBGAs/s1600/spot-sunrise-di-bukit-panguk-kediwung-bantul-yogyakarta.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Sepanjang',
        code: '096',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Sepanjang memiliki garis pantai yang panjang, pasir berwarna putih yang masih terjaga, dan ombak yang sedang. Anda tinggal memilih, ingin berjemur di atas pasir menikmati terik matahari, membelah ombak dengan papan selancar, ataupun hanya melihat keindahan pantai.',
        image: 'https://tripjogja.co.id/wp-content/uploads/2018/03/pantai-sepanjang3.jpg'
    })
    await destinationService.createDestination({
        name: 'Museum Gunung Merapi',
        code: '097',
        category:'Museum', 
        location: 'Yogyakarta', 
        description: Di kaki Gunung Merapi, sebuah museum berdiri sebagai perekam jejak gunung api ini. Kenangan dari tiap letusan tersimpan rapi, bahkan suara gemuruhnya pun dapat didengar berkali-kali. Di museum ini, Merapi dikagumi sebagai pemberi pelajaran berarti.',
        image: 'https://bisniswisata.co.id/wp-content/uploads/2019/09/Museum-Gunung-Merapi.jpg'
    })
    await destinationService.createDestination({
        name: 'Candi Ratu Boko',
        code: '098',
        category:'Candi', 
        location: 'Yogyakarta', 
        description: 'Berbeda dengan peninggalan purbakala lain dari zaman Jawa Kuno yang umumnya berbentuk bangunan keagamaan, situs Ratu Boko merupakan kompleks profan, lengkap dengan gerbang masuk, pendopo, tempat tinggal, kolam pemandian, hingga pagar pelindung.',
        image: 'https://2.bp.blogspot.com/-duty4YGEWVQ/XDjGRrT7_sI/AAAAAAAABXE/QX9Cx0JEHKYVpIo_RKC4yz3_WGn25jBCQCLcBGAs/s1600/wisata%2Bcandi%2Bratu%2Bboko.jpg'
    })
    await destinationService.createDestination({
        name: 'Bukit Gantole Cililin',
        code: '099',
        category:'Gunung', 
        location: 'Jawa Barat', 
        description: 'Bukit Gantole Cililin awalnya di buka untuk tujuan terselenggaranya Porda Jabar 2010 dan Pekan Olahraga Nasional 2016 Cabang olahraga Paralayang. Tidak hanya lokasinya yang pas untuk olahraga, pemandangan yang ada di sekitar bukit juga membuat tempat ini tidak hanya digemari oleh para atlet untuk berlatih tapi juga para wisatawan.',
        image: 'https://sikidang.com/wp-content/uploads/fasilitas-di-Bukit-Gantole-Cililin.jpg'
    })
    await destinationService.createDestination({
        name: 'Air Terjun Kali Pancur',
        code: '100',
        category:'Air', 
        location: 'Jawa Tengah', 
        description: 'Ketinggian curug atau Air Terjun Kali Pancur ini kurang lebih sekitar 100 meter. Untuk waktu terbaik agar bisa menikmati keindahan alam penuh pesona berupa air terjun ini, Anda harus datang sekitar jam 8 pagi dan kembali ke Semarang kota sebelum jam 17.00.',
        image: 'https://cdn.nativeindonesia.com/foto/2020/11/Air-Terjun-Kali-Pancur.jpg'
    })
    await destinationService.createDestination({
        name: 'Watu Gunung ',
        code: '101',
        category:'Air', 
        location: 'Jawa Tengah', 
        description: 'Watu Gunung merupakan wisata yang menyuguhkan pemandangan alam yang luar biasa indah dan unik. Walaupun wisata Watu Gunung adalah wisata buatan, namun pemandangan alamnya sangat indah dan natural. Disediakan berbagai jenis kolam renang dengan berbagai kedalaman untuk memanjakan pengunjungnya.',
        image: 'https://seringjalan.com/wp-content/uploads/2020/01/Kolam-Renang-di-Watu-Gunung.-Foto-myimage-e1578279428502.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Spathodea',
        code: '102',
        category:'Taman', 
        location: 'Jakarta', 
        description: Taman Spathodea meski tergolong taman baru namun sudah menjadi favorit bagi warga Jagakarsa dan sekitarnya untuk berkumpul dan berolahraga. Taman Spathodea memiliki banyak jenis tanaman yang ditanam baik pepohonan dan bunga-bunga yang menghiasi area taman.',
        image: 'https://getlost.id/wp-content/uploads/2021/05/spathodea_1344999578.jpg'
    })
    await destinationService.createDestination({
        name: 'Kawah Ijen',
        code: '103',
        category:'Gunung', 
        location: 'Jawa Timur', 
        description: 'Kawah Ijen berada dalam wilayah Cagar Alam Taman Wisata Ijen Kabupaten Bondowoso dan Kabupaten Banyuwangi, Jawa Timur. Fenomena eternal blue fire atau api biru abadi berada di dalam kawah Ijen, dan pemandangan alami ini hanya terjadi di dua tempat di dunia yaitu Etiopia (gunung Dallol) dan Ijen.',
        image: 'https://theworldtravelguy.com/wp-content/uploads/2021/07/DJI_0126_1200.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Wediombo',
        code: '104',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Nama Pantai Wediombo sendiri diambil dari bahasa Jawa, yakni wedi yang berarti pasir dan ombo yang berarti luas. Seperti pantai-pantai di Gunungkidul yang terkenal akan keindahannya, Wediombo juga memiliki keindahan yang mempesona dengan tebing-tebing tinggi serta pasirnya yang berwarna putih bersih.',
        image: 'https://www.pantainesia.com/wp-content/uploads/2018/04/Pantai-Wediombo-1248x703.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Sadranan',
        code: '105',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Pantai Sadranan merupakan salah satu pantai yang menyajikan keseruan menyaksikan keindahan bawah laut dengan snorkeling. Hamparan pasir putihnya diiringi deburan ombak yang cukup kencang di beberapa waktu, keindahan pantainya dihiasi dengan keberadaan sebuah pulau yang berada di tengah laut.',
        image: 'https://jogjakita.co.id/wp-content/uploads/2021/03/pantai-sadranan.png'
    })
    await destinationService.createDestination({
        name: 'Pantai Maron',
        code: '106',
        category:'Pantai', 
        location: 'Jawa Tengah', 
        description: Pantai Maron salah satu wisata pantai favorit warga di Semarang. Pantai ini terkenal dengan ombaknya yang bersahabat, pesona hutan mangrove dan tempat menikmati panorama sunset.',
        image: 'https://www.pantainesia.com/wp-content/uploads/2018/05/PANTAI-MARON-1248x703.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Congot',
        code: '107',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Pantai Congot merupakan muara dari Sungai Bogowonto. Ini pulalah yang menyebabkan Pantai Congot menjadi spot favorite para pemancing, karena terdapat banyak jenis ikan yang ada mulai dari ikan air tawar, ikan air payau hingga ikan air asin.',
        image: 'https://mytrip123.com/wp-content/uploads/2018/10/alamat-pantai-congot.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Nasional Komodo',
        code: '108',
        category:'Taman', 
        location: 'Nusa Tenggara Timur', 
        description: 'Taman nasional untuk melindungi Komodo yang terancam punah dan habitatnya serta keanekaragaman hayati di dalam wilayah tersebut. Taman lautnya dibentuk untuk melindungi biota laut yang sangat beragam yang terdapat disekitar kepulauan tersebut, termasuk yang terkaya di bumi.',
        image: 'https://img.okezone.com/content/2019/10/01/406/2111522/dikembangkan-sebagai-wisata-premium-taman-nasional-komodo-tidak-jadi-ditutup-PqqsyR1PvU.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Sari',
        code: '109',
        category:'Taman', 
        location: 'Yogyakarta', 
        description: 'Taman Sari Yogyakarta adalah situs bekas taman atau kebun istana Keraton Ngayogyakarta Hadiningrat. Walaupun secara resmi sebagai kebun kerajaan, namun bebrapa bangunan yang ada mengindikasikan Taman Sari berfungsi sebagai benteng pertahanan terakhir jika istana diserang oleh musuh.',
        image: 'https://www.starjogja.com/assets/2017/02/Tamansari-Jogja-9.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Bunga Celosia',
        code: '110',
        category:'Taman', 
        location: 'Jawa Tengah', 
        description: 'Taman Bunga Celosia dibangun dengan konsep kekinian taman bunga, spot foto, wahana permainan dan cafe garden (kuliner). Wisata ini cocok untuk semua usia mulai dari anak, remaja, dewasa, maupun lansia. Terdapat ratusan jenis bunga hias.',
        image: 'https://tamanbungacelosia.gtc9.com/wp-content/uploads/sites/48/2020/08/img-9253333-1200x675.jpg'
    })
    await destinationService.createDestination({
        name: 'Taman Budaya Yogyakarta',
        code: '111',
        category:'Museum', 
        location: 'Yogyakarta', 
        description: 'Taman Budaya Yogyakarta memiliki kompleks gedung yang berfungsi sebagai tempat pameran, pertunjukan, dan berbagai kegiatan seni lainnya.',
        image: 'https://www.sholtan.com/wp-content/uploads/2018/04/06_taman_budaya.jpeg'
    })
    await destinationService.createDestination({
        name: 'Pantai Watu Kodok',
        code: '112',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Diberi nama Pantai Watu Kodok karena konon katanya terdapat dua tebing berbentuk mirip kodok (katak) di sisi barat dan timurnya. Garis pantainya luas dan panjang dengan pasir putih yang bersih. Ombaknya memang sama seperti pantai-pantai lain, tetapi cocok untuk bermain air.',
        image: 'https://pidjar.com/wp-content/uploads/2019/09/Pantai-Watukodok.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Ngrenehan',
        code: '113',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Pantai Ngrenehan berupa teluk dan dikelilingi perbukitan kapur dengan panorama yang estetik. Selain pemandangan nan elok, pantai ini juga menawarkan surga belanja ikan segar. Sehingga pantai ini luas dikenal dengan nama pantai nelayan.',
        image: 'https://2.bp.blogspot.com/-azlDIGMWhu0/WjNSRs-IWDI/AAAAAAAAF1Q/90aY8jNur0EYylpFRwemORi7pJbW6QV1ACLcBGAs/s1600/Pantai-Ngrenehan.jpg'
    })
    await destinationService.createDestination({
        name: 'Jatim Park 2',
        code: '114',
        category:'Taman', 
        location: 'Jawa Timur', 
        description: 'Jatim Park 2 berada di dataran tinggi, tepatnya di Kota Batu, Jawa Timur. Selain memiliki hawa yang sejuk Jatim Park 2 ini memiliki banyak sekali destinasi wisata yang harus kamu datangi. Daya tarik Jatim Park 2 contohnya adalah Batu Secret Zoo, Museum Satwa, Eco Green Park, Sweet Memories Selfie.',
        image: 'https://anekatempatwisata.com/wp-content/uploads/2020/05/1-Jatim-Park-2-Wisata-Ramah-Anak-di-Malang-yang-Punya-Beragam-Wahana-1200x600.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Malela',
        code: '115',
        category:'Air', 
        location: 'Jawa Barat', 
        description: 'Tempat ini menyajikan pemandangan air terjun yang luar biasa, dan dilengkapi oleh nuansa asri tanaman hijau dan pohon rindang di sekitarnya. Air terjun Malela tidak hanya terdiri dari satu pancuran air saja, namun terdiri dari beberapa pancuran air yang berdekatan.',
        image: 'https://hargaticket.com/wp-content/uploads/2021/01/tiket-masuk-curug-malela.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Bugbrug',
        code: '116',
        category:'Air', 
        location: 'Jawa Barat', 
        description: 'Curug Bugbrug merupakan destinasi wisata berupa air terjun yang berada di Cisarua, Bandung Barat. Curug ini masih satu aliran sungai dengan Curug Tilu dan Curug Cimahi. Namun, lokasinya lebih tersembunyi di dalam area lembah. Pesona alami yang tersaji mampu menyegarkan mata dan pikiran di akhir pekan.',
        image: 'http://backpackerjakarta.com/wp-content/uploads/2016/10/62980964-0B7A-4C58-8980-FCF37E521E09.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Batu Templek',
        code: '117',
        category:'Air', 
        location: 'Jawa Barat', 
        description: 'Curug Batu Templek tak kalah menarik karena pemandangan di sekitarnya dipenuhi dengan terbing yang berbatu cadas. Sejarah Curug Batu Templek sangat sederhana, hanya karena di tempat ini dahulunya terdapat penambangan batu yang terdapat sebuah aliran air terjun dan diketahui aliran tersebut berasal dari sungai yang ada di atas tebing sehingga dinamakan Curug Batu Templek.',
        image: 'https://www.tempatwisata.pro/users_media/3091/cbt.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Greweng',
        code: '118',
        category:'Pantai', 
        location: 'Yogyakarta', 
        description: 'Pantai Greweng, lokasinya tersembunyi dibalik hutan dan ladang. Sehingga untuk menuju ke sana kamu harus melakukan trekking terlebih dahulu. Meski begitu, pantai ini tak pernah sepi pengunjung. Hampir setiap hari ada pengunjung yang datang untuk bermain air atau camping.',
        image: 'https://cdn.nativeindonesia.com/foto/pantai-greweng/Pantai-Greweng.jpg'
    })
    await destinationService.createDestination({
        name: 'Pantai Pink',
        code: '119',
        category:'Pantai', 
        location: 'Nusa Tenggara Timur', 
        description: 'Pink beach atau pantai pink yang berada di Labuan Bajo, Nusa Tenggara Timur, merupakan salah satu surga wisata di Indonesia. Dengan pasir yang berwarna pink dan birunya air laut, banyak wisatawan yang datang dari domestik maupun mancanegara. Warna pink pada pasirnya sendiri berasal dari butir-butir asli warna putih pasir, bercampur dengan terumbu karang berwarna merah yang sudah mati.',
        image: 'https://amormagazine.co.uk/wp-content/uploads/2019/10/Pink-Beach-Of-Komodo-Indonesia.jpg'
    })
    await destinationService.createDestination({
        name: 'Curug Anom',
        code: '120',
        category:'Air', 
        location: 'Jawa Barat', 
        description: 'Curug ini menawarkan Anda sebuah pemandangan yang masih sangat asri dan menenangkan. Anda yang menyukai wisata alam, datang saja ke Curug Cisarua ini dan buktikan sendiri keindahan alamnya.',
        image: 'https://www.bandoeng.co.id/wp-content/uploads/2020/12/Curug-Cimahi.jpg'
    })


    return sendResponse(res, {
        message: 'Sukses!'
    })
})

const SeederController={
    destinationSeeder
}

export default SeederController