// YDS 70+ Kapsamlı Konu Anlatımı Veri Tabanı
// Sıfırdan 70'e Gramer Konuları, Formüller, ÖSYM Soru Kalıpları ve Tuzaklar

export const LESSONS_DATA = [
  {
    id: "lesson_tenses",
    title: "1. Tenses (Zamanlar) & Zaman Uyumu Kuralı",
    category: "Gramer",
    estimatedTime: "25 dk",
    badge: "YDS'nin Temeli",
    summary: "YDS'de tenses tek başına 2-3 soru, cümle tamamlama ve bağlaçlarda ise 10+ sorunun çözüm anahtarıdır.",
    content: [
      {
        heading: "1. Altın Kural: Zaman Uyumu (Tense Agreement)",
        text: "YDS'de bir cümlede iki farklı zaman bağlanıyorsa, aralarında zaman uyumu olmak ZORUNDADIR. Present yapılar Present/Future ile, Past yapılar ise Past/Past Perfect ile eşleşir.",
        box: {
          type: "formula",
          title: "Zaman Uyumu Formülü",
          content: "Present + Present / Future\nPast + Past / Past Perfect (had V3)\n⚠️ KURAL: İstisnai bir bağlaç (SINCE gibi) yoksa, bir taraf Past (V2) iken diğer taraf Present (have/has V3 ya da is/are) OLAMAZ!"
        }
      },
      {
        heading: "2. Since İstisnası (ÖSYM'nin En Sevdiği Kural)",
        text: "'Since' (-den beri) bağlacı, zaman uyumunu bozan tek büyük istisnadır ve hemen her YDS'de mutlaka sorulur.",
        box: {
          type: "rule",
          title: "Since Formülü (Ezberle!)",
          content: "Since + Simple Past (V2) , Present Perfect (have / has V3)\nÖrnek: Since antibiotics were discovered in 1928, human life expectancy has increased significantly."
        }
      },
      {
        heading: "3. 'By the time' ve 'By + Tarih' Kuralı",
        text: "'By the time' (-e kadar) kalıbı arkasından zamanına göre iki kalıp alır:",
        box: {
          type: "formula",
          title: "By The Time Kalıpları",
          content: "1. By the time + V2 (Past) , Had + V3 (Past Perfect)\n2. By the time + V1 (Present) , Will have + V3 (Future Perfect)\n3. By 2050 (Gelecek tarih) -> will have V3\n4. By 1950 (Geçmiş tarih) -> had V3"
        }
      },
      {
        heading: "4. Past Perfect (Had + V3) Tuzağı",
        text: "ÖSYM adayları en çok 'had V3' ile yanıltır. Unutmayın: Had V3 tek başına durup dururken KULLANILMAZ! Cümlede geçmişte olmuş başka bir olay (V2) olmalıdır ki, ondan da önce olduğunu belirtmek için had V3 seçilsin."
      }
    ],
    sampleExamQuestion: {
      year: "2022 YDS",
      question: "By the time modern archaeological excavation techniques ---- in the late 19th century, treasure hunters ---- numerous ancient tombs.",
      options: [
        "A) were developed / had already looted",
        "B) had developed / were looting",
        "C) develop / looted",
        "D) have been developed / had looted",
        "E) was developing / have looted"
      ],
      correct: "A",
      explanation: "By the time'dan sonra 'in the late 19th century' (geçmiş zaman) geldiği için ilk boşluk Simple Past Passive ('were developed'), ana cümle ise geçmişin geçmişi olduğundan 'had already looted' olur. Doğru cevap A."
    }
  },
  {
    id: "lesson_passive",
    title: "2. Passive Voice (Edilgen Çatı) & By İpuçları",
    category: "Gramer",
    estimatedTime: "20 dk",
    badge: "4-5 Soru Etkisi",
    summary: "Akademik makaleler nesnel olduğu için YDS metinlerinin %50'si Edilgen (Passive) cümlelerden oluşur.",
    content: [
      {
        heading: "1. Aktif mi Pasif mi? (10 Saniyede Tespit)",
        text: "Boşluğa gelecek fiilin aktif mi yoksa pasif mi olduğunu anlamanın en kestirme yolu, BOŞLUKTAN HEMEN SONRA NESNE (Object) olup olmadığına bakmaktır.",
        box: {
          type: "rule",
          title: "Nesne Kuralı",
          content: "Boşluktan sonra bir NESNE (isim öbeği) VARSA -> Cümle genelde AKTİF'tir.\nBoşluktan sonra EDAT (by, in, with, on, to) geliyorsa veya hiçbir nesne yoksa -> Cümle PASİF'tir (be + V3)."
        }
      },
      {
        heading: "2. Pasif Formülleri Tablosu",
        text: "Bir yapının pasif olması için İÇİNDE MUTLAKA 'BE' FİİLİNİN BİR TÜREVİ + FİİLİN 3. HALİ (V3) bulunmalıdır.",
        box: {
          type: "formula",
          title: "Pasif Çekimler",
          content: "Present: is/are + V3 (is conducted)\nPast: was/were + V3 (was conducted)\nPresent Perfect: have/has been + V3 (has been conducted)\nModals: can/must/should be + V3 (must be conducted)"
        }
      },
      {
        heading: "3. Nesne Almayan Fiiller Asla Pasif Olamaz!",
        text: "Bazı fiiller geçişsizdir (intransitive), yani nesne almazlar. Bu fiiller asla 'be + V3' şeklinde pasif yapılamaz: emerge, occur, happen, exist, arise, die, vanish. Şıklarda 'was occurred' veya 'has been existed' görürseniz gözünüz kapalı eleyin!"
      }
    ],
    sampleExamQuestion: {
      year: "2021 YDS",
      question: "The newly discovered manuscript ---- to have been written by a medieval scholar, but recent chemical tests ---- its authenticity.",
      options: [
        "A) was believed / have confirmed",
        "B) believes / confirmed",
        "C) is believing / had confirmed",
        "D) has believed / will confirm",
        "E) was believing / are confirmed"
      ],
      correct: "A",
      explanation: "El yazması (manuscript) kendi kendine inanmaz, inanılır (pasif: was believed). İkinci kısımda ise testler öznesi aktif olarak orijinalliği onaylar (aktif: have confirmed). Doğru cevap A."
    }
  },
  {
    id: "lesson_modals",
    title: "3. Modals & Past Modals (Geçmiş Modallar)",
    category: "Gramer",
    estimatedTime: "20 dk",
    badge: "Önemli Soru Tipi",
    summary: "ÖSYM özellikle 'Modal + have + V3' yapılarından soru üretir. Anlam farklarını bilmek hayat kurtarır.",
    content: [
      {
        heading: "1. YDS'nin Favorisi: Past Modals (Modal + Have + V3)",
        text: "Geçmişe yönelik tahmin, pişmanlık ve olasılık belirten bu 5 yapıyı mutlaka ezberleyin:",
        box: {
          type: "rule",
          title: "Geçmiş Modallar ve Anlamları",
          content: "1. Must have V3: Yapmış olmalı (Geçmişe dair güçlü kesin tahmin)\n2. Should have V3: Yapmalıydı (ama yapmadı - eleştiri/pişmanlık)\n3. Couldn't have V3 / Can't have V3: Yapmış olamaz (İmkansızlık)\n4. Might / May have V3: Yapmış olabilir (Geçmişe dair zayıf ihtimal)\n5. Needn't have V3: Yapmasına gerek yoktu (ama yaptı)"
        }
      },
      {
        heading: "2. Cümle Tamamlamada 'Present Modals' İpuçları",
        text: "Eğer cümle kökünde 'evidence suggests, studies show' gibi bilimsel gerçeklik varsa, şıklarda 'can, may, could' gibi ihtiyatlı modallar önceliklidir."
      }
    ],
    sampleExamQuestion: {
      year: "2023 YDS",
      question: "Given the immense destruction of Pompeii, inhabitants who failed to evacuate immediately ---- survived the catastrophic volcanic surge.",
      options: [
        "A) couldn't have",
        "B) must have",
        "C) should have",
        "D) need have",
        "E) would have"
      ],
      correct: "A",
      explanation: "'Given the immense destruction' (Dehşet verici yıkım göz önüne alındığında) tahliye olamayanların hayatta kalmış olması İMKANSIZDIR. Geçmişte imkansızlık 'couldn't have survived' ile ifade edilir. Doğru cevap A."
    }
  },
  {
    id: "lesson_conjunctions",
    title: "4. Bağlaçlar (Conjunctions) & Geçiş İfadeleri",
    category: "Gramer & Taktik",
    estimatedTime: "30 dk",
    badge: "YDS'NİN KALBİ (%40)",
    summary: "YDS'yi kazanmak bağlaçları bilmekten geçer. Cümle alanlar vs İsim alanlar ayrımı tüm sınavın kilidini açar.",
    content: [
      {
        heading: "1. En Büyük Ayrım: Cümle Alanlar vs İsim Alanlar",
        text: "Sınavda bir bağlaç sorusu gördüğünüzde İLK BAKMANIZ GEREKEN ŞEY: Boşluktan sonra tam bir Cümle (Özne + Yüklem) mi var, yoksa sadece İsim / Ving mi var?",
        box: {
          type: "formula",
          title: "Bağlaç Gruplaması",
          content: "ZITLIK:\n• + CÜMLE: Although, Even though, Though, While, Whereas\n• + İSİM: Despite, In spite of, Notwithstanding\n\nSEBEP:\n• + CÜMLE: Because, Since, As, Given that\n• + İSİM: Due to, Because of, Owing to, On account of\n\nAMAÇ:\n• + CÜMLE: So that, In order that\n• + FİİL (V1): In order to, So as to"
        }
      },
      {
        heading: "2. Zıtlıkta (+ / -) Duygu Dengesi Kuralı",
        text: "Zıtlık bağlaçları (Although, Despite, However) iki tezat durumu birbirine bağlar. Cümlenin bir tarafı pozitif/olumlu ise, diğer tarafı mutlaka negatif/olumsuz olmak zorundadır."
      },
      {
        heading: "3. İkili Bağlaçlar (Correlative Conjunctions)",
        text: "İkili bağlaçlarda paralellik şarttır. Birinci kısımdan sonra fiil gelirse ikinciden sonra da fiil, sıfat gelirse sıfat gelir.",
        box: {
          type: "rule",
          title: "İkili Bağlaç Çiftleri",
          content: "• Not only ... but also (Sadece ... değil, aynı zamanda ... da)\n• Either ... or (Ya ... ya da)\n• Neither ... nor (Ne ... ne de)\n• Both ... and (Hem ... hem de)\n• Whether ... or (İster ... ister / -ıp -madığı)"
        }
      }
    ],
    sampleExamQuestion: {
      year: "2020 YDS",
      question: "---- the catastrophic wildfire destroyed thousands of hectares of forest, native wildlife populations recovered much faster than ecologists anticipated.",
      options: [
        "A) Although",
        "B) Despite",
        "C) Because",
        "D) In case",
        "E) Provided that"
      ],
      correct: "A",
      explanation: "Boşluktan sonra 'the wildfire destroyed...' şeklinde tam bir CÜMLE (Özne + Yüklem) vardır, bu nedenle 'Despite' elenir. İlk kısım olumsuz (yıkım), ikinci kısım olumlu (hızlı toparlanma) olduğundan zıtlık gereklidir. Doğru cevap A (Although)."
    }
  },
  {
    id: "lesson_clauses",
    title: "5. Relative & Noun Clauses (Sıfat ve İsim Cümlecikleri)",
    category: "Gramer",
    estimatedTime: "25 dk",
    badge: "Cümle Bölme Anahtarı",
    summary: "Uzun YDS cümlelerinin %80'i Relative Clause ile uzatılır. Sıfat cümleciğini paranteze alıp ana cümleyi bulursanız soru 10 saniyede çözülür.",
    content: [
      {
        heading: "1. Relative Clauses (Sıfat Cümlecikleri)",
        text: "Kendisinden önceki İSMİ niteler. İsmin türüne göre zamir seçilir:",
        box: {
          type: "rule",
          title: "Relative Zamirleri",
          content: "• İnsan için: Who (özne), Whom (nesne)\n• Cansız / Hayvan için: Which / That\n• Sahiplik: Whose + Eksiz İsim (whose car, whose parents)\n• Yer için: Where / In which\n• Zaman için: When / At which"
        }
      },
      {
        heading: "2. 'Preposition + Which' Mantığı",
        text: "YDS'nin en sevdiği yapılardan biridir: 'through which' (vasıtasıyla), 'in which' (içinde), 'by which' (yoluyla), 'for which' (bu sebeple). Kendisinden sonra gelen fiilin hangi edatı aldığına bakılarak çözülür."
      },
      {
        heading: "3. Reductions (Kısaltmalar) Formülü",
        text: "Virgülle ayrılan kısaltmalarda virgülden hemen sonraki ÖZNEYE bakın:",
        box: {
          type: "formula",
          title: "Kısaltma Formülü",
          content: "Özne eylemi KENDİSİ YAPIYORSA (Aktif) -> V-ing / Having V3\nÖzne eyleme MARUZ KALIYORSA (Pasif) -> V3 / Having been V3"
        }
      }
    ],
    sampleExamQuestion: {
      year: "2021 YDS",
      question: "Scientists have developed a lightweight material ---- incredible strength makes it ideal for aerospace engineering.",
      options: [
        "A) whose",
        "B) which",
        "C) where",
        "D) that",
        "E) whom"
      ],
      correct: "A",
      explanation: "Boşluktan sonra 'incredible strength' (inanılmaz dayanıklılık) eksiz bir isim tamlamasıdır. 'Dayanıklılığı havacılık için ideal olan materyal' sahipliği ifade ettiği için doğru cevap 'whose'dur. Doğru cevap A."
    }
  },
  {
    id: "lesson_translation",
    title: "6. Çeviri Soruları Çözüm Sanatı (6/6 Hedefi)",
    category: "Soru Tipi Taktikleri",
    estimatedTime: "15 dk",
    badge: "Bedava 7.5 Puan!",
    summary: "Cümlenin tamamını okumadan sadece 3 adımda 20 saniyede şıkları eleme kılavuzu.",
    content: [
      {
        heading: "1. Adım: Ana Cümlenin YÜKLEMİNİ Bul",
        text: "Türkçede yüklem cümlenin EN SONUNDA yer alır. İngilizcede ise öznenin hemen arkasından gelir. İngilizce cümlenin ana fiilini tespit edip, Türkçe şıkların sadece SON KELİMESİNE bakın. 5 şıktan 3'ü 5 saniye içinde sadece yüklemden elenir!"
      },
      {
        heading: "2. Adım: Cümlenin ÖZNESİNİ Bul",
        text: "Yüklemden önce kim/ne sorusunu sorarak özneyi tespit edin. Kalan 2 şıktan biri özne sıfat tamlaması hatasından elenir."
      },
      {
        heading: "3. Adım: Bağlaç ve Zaman Uyumu",
        text: "Cümlede 'although' varsa '-e rağmen / karşın', 'not only but also' varsa 'sadece ... değil aynı zamanda' aranır."
      }
    ],
    sampleExamQuestion: {
      year: "2022 YDS",
      question: "Recent astrophysical observations indicate that our galaxy contains billions of potentially habitable exoplanets.",
      options: [
        "A) Son astrofiziksel gözlemler, galaksimizin potansiyel olarak yaşanabilir milyarlarca ötegezegen barındırdığını göstermektedir.",
        "B) Galaksimizde potansiyel olarak yaşanabilir ötegezegenlerin olduğu, astrofiziksel gözlemlerle kanıtlanmıştır.",
        "C) Milyarlarca ötegezegen barındıran galaksimiz, son astrofiziksel gözlemlerin odağı haline gelmiştir.",
        "D) Yaşanabilir gezegenlerin varlığı, son astrofiziksel gözlemler neticesinde ortaya çıkmıştır.",
        "E) Astrofiziksel gözlemler galaksimizde milyarlarca gezegen olduğunu varsaymaktadır."
      ],
      correct: "A",
      explanation: "1. Ana yüklem: 'indicate that' -> 'göstermektedir / işaret etmektedir'. Şıklarda sonu 'göstermektedir' olan tek şık A'dır! 10 saniyede soru çözülür."
    }
  }
];
