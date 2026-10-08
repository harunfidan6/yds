// YDS Soru Bankası & Gerçek Sınav Formatında Çözümlü Sorular
// Geçmiş YDS Sınav Soruları (2023, 2022, 2021, 2020 Çıkmış Sorular)
// Her soruda anında doğru/yanlış geri bildirimi ve detaylı Türkçe çözüm mantığı!

export const QUESTIONS_DATA = [
  // ==========================================
  // --- GEÇMİŞ YDS ÇIKMIŞ SORULARI (2020 - 2023) ---
  // ==========================================
  {
    id: "yds_past_2023_voc1",
    isPastExam: true,
    examYear: "2023 YDS (Çıkmış Soru)",
    category: "Kelime (Vocabulary)",
    question: "The relentless burning of fossil fuels has caused an alarming increase in greenhouse gas concentrations, which could severely ---- global climate patterns for centuries to come.",
    options: [
      { label: "A", text: "disrupt" },
      { label: "B", text: "accommodate" },
      { label: "C", text: "strengthen" },
      { label: "D", text: "substitute" },
      { label: "E", text: "maintain" }
    ],
    correct: "A",
    explanation: "DOĞRU CEVAP: A (disrupt - aksatmak, altüst etmek, bozmak).\n\n💡 TAKTİK ANALİZİ (+ / - DENGESİ):\nCümlede 'relentless burning of fossil fuels' (amansız fosil yakıt tüketimi) ve 'alarming increase' (korkutucu artış) gibi olumsuz etkenler vardır. Bu durum küresel iklim modellerini ancak 'severely disrupt' (ciddi şekilde altüst edebilir / bozabilir).\n\n❌ Çeldirciler Neden Yanlış?\nB) accommodate: yer sağlamak, uyum sağlamak\nC) strengthen: güçlendirmek (Olumlu - tam zıttı)\nD) substitute: yerine koymak\nE) maintain: sürdürmek, devam ettirmek (Olumlu/Nötr)"
  },
  {
    id: "yds_past_2023_pv1",
    isPastExam: true,
    examYear: "2023 YDS (Çıkmış Soru)",
    category: "Phrasal Verbs",
    question: "Despite numerous technological breakthroughs, renewable energy sources such as solar and wind power currently ---- only a modest portion of total global electricity supply.",
    options: [
      { label: "A", text: "turn down" },
      { label: "B", text: "account for" },
      { label: "C", text: "bring about" },
      { label: "D", text: "carry out" },
      { label: "E", text: "call off" }
    ],
    correct: "B",
    explanation: "DOĞRU CEVAP: B (account for - oluşturmak, tekabül etmek).\n\n💡 ÖSYM'NİN FAVORİ SORU KALIBI:\nBoşluktan sonra bir oran, miktar veya yüzde ('a modest portion', '%30', 'half of the energy') geldiğinde ÖSYM'nin sorguladığı tek phrasal fiil 'account for'dur!\n\n❌ Çeldirciler Neden Yanlış?\nA) turn down: reddetmek veya kısmak\nC) bring about: sebep olmak, yol açmak\nD) carry out: yürütmek, uygulamak (deney, araştırma vb.)\nE) call off: iptal etmek"
  },
  {
    id: "yds_past_2022_gram1",
    isPastExam: true,
    examYear: "2022 YDS (Çıkmış Soru)",
    category: "Gramer & Bağlaçlar",
    question: "---- the introduction of strict environmental regulations and heavy fines, industrial plants continue to discharge hazardous pollutants into the river basin.",
    options: [
      { label: "A", text: "Despite" },
      { label: "B", text: "Although" },
      { label: "C", text: "Because" },
      { label: "D", text: "In order that" },
      { label: "E", text: "Unless" }
    ],
    correct: "A",
    explanation: "DOĞRU CEVAP: A (Despite - -e rağmen).\n\n💡 ALTIN KURAL: CÜMLE ALANLAR vs İSİM ALANLAR!\nBoşluktan sonra gelen 'the introduction of strict regulations' öbeği içinde FİİL (yüklem) yoktur; sadece bir İsim Öbeğidir (Noun Phrase)!\nBu nedenle kendisinden sonra CÜMLE (Özne + Fiil) isteyen B (Although), C (Because), D (In order that) ve E (Unless) şıkları İLK 5 SANİYEDE ELENİR. İsim alan tek zıtlık bağlacı 'Despite'tır!"
  },
  {
    id: "yds_past_2022_tense1",
    isPastExam: true,
    examYear: "2022 YDS (Çıkmış Soru)",
    category: "Gramer & Zamanlar",
    question: "By the time archaeologists ---- the burial chamber in the Valley of the Kings, tomb raiders ---- virtually all of the precious gold artifacts.",
    options: [
      { label: "A", text: "discovered / had already stolen" },
      { label: "B", text: "discover / stole" },
      { label: "C", text: "had discovered / were stealing" },
      { label: "D", text: "were discovering / have stolen" },
      { label: "E", text: "have discovered / stole" }
    ],
    correct: "A",
    explanation: "DOĞRU CEVAP: A (discovered / had already stolen).\n\n💡 FORMÜL: 'BY THE TIME' PAST KALIBI:\nBy the time + Simple Past (V2) , Past Perfect (had + V3).\nArkeologlar mezar odasını keşfedene kadar, mezar soyguncuları değerli altın eserlerin neredeyse tamamını ÇOKTAN ÇALMIŞTI. Geçmişin geçmişi olduğu için had V3 kuralı uygulanır."
  },
  {
    id: "yds_past_2022_tr1",
    isPastExam: true,
    examYear: "2022 YDS (Çıkmış Soru)",
    category: "Çeviri (İngilizce -> Türkçe)",
    question: "Although modern astronomy has mapped billions of galaxies, scientists still know very little about the true nature of dark matter.",
    options: [
      { label: "A", text: "Modern astronomi milyarlarca galaksiyi haritalandırmış olsa da bilim insanları karanlık maddenin gerçek doğası hakkında hala çok az şey bilmektedir." },
      { label: "B", text: "Bilim insanları karanlık maddenin gerçek doğasını henüz tam olarak çözemediği için milyarlarca galaksinin haritası çıkarılmıştır." },
      { label: "C", text: "Milyarlarca galaksinin haritasını çıkaran modern astronomi sayesinde karanlık maddenin sırrı aydınlatılmaktadır." },
      { label: "D", text: "Karanlık maddenin gizemi sürdükçe modern astronominin milyarlarca galaksiyi haritalandırması yeterli olmayacaktır." },
      { label: "E", text: "Modern astronomi karanlık maddenin gerçek yapısını açıklayamasa da galaksilerin haritasını başarıyla çizmiştir." }
    ],
    correct: "A",
    explanation: "DOĞRU CEVAP: A.\n\n💡 15 SANİYEDE ÇÖZÜM: ANA YÜKLEM & BAĞLAÇ TAKTİĞİ!\n1. İngilizce ana yüklem: 'still know very little' -> 'hala çok az şey bilmektedir'.\n2. Şıkların sonuna bakın:\nA) ...hala çok az şey bilmektedir. (BİREBİR UYUYOR)\nB) ...çıkarılmıştır. (ELENDİ)\nC) ...aydınlatılmaktadır. (ELENDİ)\nD) ...yeterli olmayacaktır. (ELENDİ)\nE) ...başarıyla çizmiştir. (ELENDİ)\n3. 'Although' = 'olsa da / -e rağmen'. Tek bir hamlede doğru cevap A bulunur!"
  },
  {
    id: "yds_past_2021_sc1",
    isPastExam: true,
    examYear: "2021 YDS (Çıkmış Soru)",
    category: "Cümle Tamamlama",
    question: "Even though early hominids possessed significantly smaller cranial capacities than modern humans, ----.",
    options: [
      { label: "A", text: "they were capable of crafting complex stone tools and using controlled fire" },
      { label: "B", text: "because their diet consisted predominantly of raw roots and uncultivated plants" },
      { label: "C", text: "so evolutionary biologists could not find any skeletal remains" },
      { label: "D", text: "their technological capabilities were therefore extremely primitive and ineffective" },
      { label: "E", text: "modern primates have also failed to adapt to sudden environmental changes" }
    ],
    correct: "A",
    explanation: "DOĞRU CEVAP: A.\n\n💡 TAKTİK ANALİZİ (+ / - ZITLIK DENGESİ):\n1. Soru kökü: 'Even though' (Zıtlık) + 'smaller cranial capacities' (daha küçük kafatası/beyin hacmine sahip olmalarına rağmen -> - OLUMSUZ / EKSİ).\n2. İkinci kısım MUTLAKA (+ OLUMLU) bir beceri içermelidir!\n3. Şık A: 'karmaşık taş aletler yapabiliyor ve kontrollü ateş kullanabiliyorlardı' (+ OLUMLU BECERİ). Zıtlık dengesi kusursuzdur!\nB şıkkında 'because' iki bağlaç çakışması yapar; D şıkkı ise negatif durumla devam eder."
  },
  {
    id: "yds_past_2021_prep1",
    isPastExam: true,
    examYear: "2021 YDS (Çıkmış Soru)",
    category: "Gramer & Edatlar",
    question: "Children who suffer from chronic malnutrition during early childhood are much more prone ---- developmental delays and cognitive impairments.",
    options: [
      { label: "A", text: "to" },
      { label: "B", text: "from" },
      { label: "C", text: "with" },
      { label: "D", text: "about" },
      { label: "E", text: "in" }
    ],
    correct: "A",
    explanation: "DOĞRU CEVAP: A (to).\n\n💡 SABİT EDAT KOMBİNASYONU:\n'Prone to' (-e yatkın, -e meyilli) kalıbı daima 'TO' edatıyla kullanılır. YDS'de aynı aileden gelen şu kelimelerin tümü TO alır: susceptible to, vulnerable to, exposed to, prone to."
  },
  {
    id: "yds_past_2020_irr1",
    isPastExam: true,
    examYear: "2020 YDS (Çıkmış Soru)",
    category: "Akışı Bozan Cümle",
    question: "(I) Coral reefs are among the most biologically diverse and economically valuable ecosystems on the planet. (II) They provide critical protective barriers for coastal communities against devastating storm surges. (III) Tourism in coastal resorts has expanded rapidly due to inexpensive airline travel options. (IV) Moreover, thousands of marine species depend on these reefs as essential nurseries. (V) Unfortunately, rising ocean temperatures and acidification are causing unprecedented coral bleaching worldwide.",
    options: [
      { label: "A", text: "I" },
      { label: "B", text: "II" },
      { label: "C", text: "III" },
      { label: "D", text: "IV" },
      { label: "E", text: "V" }
    ],
    correct: "C",
    explanation: "DOĞRU CEVAP: C (III numaralı cümle).\n\n💡 KONU VE KAPSAM ANALİZİ:\nParagraf mercan resiflerinin (coral reefs) ekolojik önemi, kıyıları koruması (II), deniz canlılarına yuva olması (IV) ve iklim kriziyle beyazlaması (V) üzerinedir.\nIII. Cümle ise aniden 'ucuz havayolu seçenekleriyle kıyı turizminin büyümesinden' bahsederek resiflerin biyolojik ekolojisi konusunun tamamen dışına çıkmıştır. III çıkarıldığında metin mükemmel bir akış kazanır."
  },

  // ==========================================
  // --- ÖZGÜN YDS GELİŞTİRME SORULARI ---
  // ==========================================
  {
    id: "q_voc_1",
    isPastExam: false,
    examYear: "Özgün YDS Formatı",
    category: "Kelime (Vocabulary)",
    question: "Prolonged exposure to chronic workplace stress can severely ---- an employee's cognitive performance and immune system.",
    options: [
      { label: "A", text: "undermine" },
      { label: "B", text: "facilitate" },
      { label: "C", text: "foster" },
      { label: "D", text: "implement" },
      { label: "E", text: "sustain" }
    ],
    correct: "A",
    explanation: "DOĞRU CEVAP: A (undermine - zayıflatmak, baltalamak).\n\n💡 TAKTİK & ANLAM ANALİZİ:\nCümlede 'chronic workplace stress' (kronik iş yeri stresi) olumsuz bir etkendir. Bir çalışanın bilişsel performansına ve bağışıklık sistemine ne yapabilir? Elbette zarar verir veya zayıflatır.\n\n❌ Çeldirciler Neden Yanlış?\nB) facilitate: kolaylaştırmak (Olumlu)\nC) foster: geliştirmek (Olumlu)\nD) implement: yürürlüğe koymak\nE) sustain: sürdürmek, devam ettirmek"
  },
  {
    id: "q_voc_2",
    isPastExam: false,
    examYear: "Özgün YDS Formatı",
    category: "Kelime (Vocabulary)",
    question: "Scientists warned that deforestation in the Amazon basin could have ---- consequences for global climate stability.",
    options: [
      { label: "A", text: "reluctant" },
      { label: "B", text: "detrimental" },
      { label: "C", text: "plausible" },
      { label: "D", text: "obsolete" },
      { label: "E", text: "versatile" }
    ],
    correct: "B",
    explanation: "DOĞRU CEVAP: B (detrimental - zararlı, hasar verici).\n\n💡 TAKTİK ANALİZİ:\n'Deforestation' (ormansızlaşma) olumsuz bir kavramdır. İklim istikrarı üzerindeki sonuçları (consequences) ancak 'zararlı/yıkıcı' olabilir.\n\n❌ Çeldirciler Neden Yanlış?\nA) reluctant: isteksiz, tereddütlü\nC) plausible: akla yatkın, makul\nD) obsolete: modası geçmiş, kullanımdan kalkmış\nE) versatile: çok yönlü"
  },
  {
    id: "q_voc_3",
    isPastExam: false,
    examYear: "Özgün YDS Formatı",
    category: "Phrasal Verbs",
    question: "Renewable energy technologies such as wind and solar currently ---- approximately 30 percent of total electricity production in the region.",
    options: [
      { label: "A", text: "call off" },
      { label: "B", text: "stem from" },
      { label: "C", text: "account for" },
      { label: "D", text: "wipe out" },
      { label: "E", text: "put off" }
    ],
    correct: "C",
    explanation: "DOĞRU CEVAP: C (account for - oluşturmak, tekabül etmek, açıklamak).\n\n💡 TAKTİK ANALİZİ:\nYDS'nin en sevdiği phrasal fiil! Yanında bir yüzde veya miktar ('30 percent', 'half of the population', 'a large portion') varsa cevap %95 'account for' (oluşturmak/denk gelmek) veya 'make up' olur.\n\n❌ Çeldirciler:\nA) call off: iptal etmek\nB) stem from: -den kaynaklanmak\nD) wipe out: kökünü kazımak, yok etmek\nE) put off: ertelemek"
  },
  {
    id: "q_voc_4",
    isPastExam: false,
    examYear: "Özgün YDS Formatı",
    category: "Phrasal Verbs",
    question: "The economic crisis was not caused by a single event; rather, it ---- decades of unregulated financial speculation.",
    options: [
      { label: "A", text: "stemmed from" },
      { label: "B", text: "ruled out" },
      { label: "C", text: "called off" },
      { label: "D", text: "made up for" },
      { label: "E", text: "carried out" }
    ],
    correct: "A",
    explanation: "DOĞRU CEVAP: A (stemmed from - -den kaynaklandı, ileri geldi).\n\n💡 TAKTİK ANALİZİ:\nCümlede 'was not caused by X; rather it ---- decades of speculation' diyor (Tek bir olaydan çıkmadı; bilakis onlarca yıllık spekülasyondan kaynaklandı). Bir durumun kaynağından bahsedilirken 'stem from / originate from' kullanılır."
  },
  {
    id: "q_gram_1",
    isPastExam: false,
    examYear: "Özgün YDS Formatı",
    category: "Gramer & Bağlaçlar",
    question: "---- the severe economic downturn, the tech corporation reported record-breaking quarterly profits.",
    options: [
      { label: "A", text: "Although" },
      { label: "B", text: "Despite" },
      { label: "C", text: "Because" },
      { label: "D", text: "Unless" },
      { label: "E", text: "Whereas" }
    ],
    correct: "B",
    explanation: "DOĞRU CEVAP: B (Despite - -e rağmen).\n\n💡 ALTIN KURAL: CÜMLE vs İSİM AYRIMI!\nBoşluktan sonra 'the severe economic downturn' (şiddetli ekonomik gerileme) gelmiştir. İçinde FİİL (yüklem) yoktur, sadece bir İsim Öbeğidir (Noun Phrase)!\nAlthough, Because, Unless ve Whereas kendilerinden sonra mutlaka tam CÜMLE (Özne + Fiil) alırlar. İsim öbeğiyle sadece 'Despite / In spite of' kullanılır."
  },
  {
    id: "q_gram_2",
    isPastExam: false,
    examYear: "Özgün YDS Formatı",
    category: "Gramer & Bağlaçlar",
    question: "Electric vehicles produce zero tailpipe emissions, ---- they still contribute to pollution indirectly through battery manufacturing.",
    options: [
      { label: "A", text: "yet" },
      { label: "B", text: "so" },
      { label: "C", text: "because" },
      { label: "D", text: "in order that" },
      { label: "E", text: "as long as" }
    ],
    correct: "A",
    explanation: "DOĞRU CEVAP: A (yet - yine de, ama, fakat).\n\n💡 TAKTİK ANALİZİ (+ / - DENGESİ):\nİlk kısım: 'produce zero tailpipe emissions' (+ Olumlu özellik)\nİkinci kısım: 'they still contribute to pollution indirectly' (- Olumsuz özellik)\nArtıdan eksiye geçişte ZITLIK bağlacı gerekir. 'Yet' virgülle ayrılarak iki bağımsız cümleyi zıtlıkla bağlar (but ile aynı anlamdadır)."
  },
  {
    id: "q_sc_1",
    isPastExam: false,
    examYear: "Özgün YDS Formatı",
    category: "Cümle Tamamlama",
    question: "Although extensive clinical trials demonstrated the vaccine's high efficacy, ----.",
    options: [
      { label: "A", text: "public health agencies immediately launched nationwide immunization campaigns" },
      { label: "B", text: "widespread skepticism on social media prevented many citizens from getting vaccinated" },
      { label: "C", text: "it was proven to provide long-lasting immunity against new viral variants" },
      { label: "D", text: "because pharmaceutical manufacturers were able to double their production capacity" },
      { label: "E", text: "so doctors strongly encouraged high-risk patients to receive the dose" }
    ],
    correct: "B",
    explanation: "DOĞRU CEVAP: B.\n\n💡 TAKTİK ANALİZİ:\n1. Soru kökü 'Although' (Zıtlık) ile başlıyor.\n2. Cümle: 'klinik deneyler aşının yüksek etkinliğini kanıtladı' (+ OLUMLU).\n3. O halde aranan kısım MUTLAKA (- OLUMSUZ) olmalıdır!\n\nŞık B: 'Sosyal medyadaki yaygın şüphecilik birçok vatandaşın aşılanmasını ENGELLLEDİ' (- OLUMSUZ). Mükemmel zıtlık uyumu!\nA, C ve E şıkları olumludur (+), D şıkkı ise 'because' ile başladığı için iki bağlaç çakışması yapar."
  },
  {
    id: "q_tr_1",
    isPastExam: false,
    examYear: "Özgün YDS Formatı",
    category: "Çeviri (İngilizce -> Türkçe)",
    question: "Although artificial intelligence offers tremendous opportunities for diagnostic medicine, ethical concerns regarding patient privacy must be carefully addressed.",
    options: [
      { label: "A", text: "Yapay zeka tanısal tıp için muazzam fırsatlar sunmasına rağmen, hasta mahremiyetine ilişkin etik kaygılar dikkatle ele alınmalıdır." },
      { label: "B", text: "Yapay zekanın tanısal tıpta muazzam fırsatlar sunması, hasta mahremiyetiyle ilgili etik kaygıların çözülmesini sağlamıştır." },
      { label: "C", text: "Hasta mahremiyetine dair etik kaygılar dikkatle çözülmedikçe, yapay zekanın tanısal tıptaki fırsatlarından yararlanılamaz." },
      { label: "D", text: "Yapay zeka tanısal tıpta fırsatlar sunabilir ancak hasta mahremiyetine yönelik etik endişeler her zaman önceliklidir." },
      { label: "E", text: "Tanısal tıpta yapay zekanın fırsatları büyüktür çünkü hasta mahremiyetine ilişkin etik kurallar dikkatle uygulanmaktadır." }
    ],
    correct: "A",
    explanation: "DOĞRU CEVAP: A.\n\n💡 15 SANİYEDE ÇÖZÜM: ANA YÜKLEM TAKTİĞİ!\n1. İngilizce cümlenin ana fiiline bakın: 'must be carefully addressed' -> 'dikkatle ele alınmalıdır / giderilmelidir'.\n2. Şıkların sadece sonuna bakın:\nA) ...dikkatle ele alınmalıdır. (BİREBİR UYUYOR!)\nB) ...sağlamıştır. (ELENDİ)\nC) ...yararlanılamaz. (ELENDİ)\nD) ...önceliklidir. (ELENDİ)\nE) ...uygulanmaktadır. (ELENDİ)\n3. 10 saniyede tek bir fiille 4 şık elendi! Doğru cevap kesin olarak A."
  },
  {
    id: "q_tr_3",
    isPastExam: false,
    examYear: "Özgün YDS Formatı",
    category: "Çeviri (Türkçe -> İngilizce)",
    question: "Düzenli fiziksel egzersiz yapmak sadece kalp sağlığını korumakla kalmaz, aynı zamanda stres seviyesini de önemli ölçüde azaltır.",
    options: [
      { label: "A", text: "Engaging in regular physical exercise not only protects cardiovascular health but also significantly reduces stress levels." },
      { label: "B", text: "If one does regular physical exercise, cardiovascular health is protected and stress levels decrease." },
      { label: "C", text: "Although regular exercise protects heart health, it is also necessary to reduce stress levels." },
      { label: "D", text: "Engaging in physical exercise can protect heart health as well as eliminate all daily stress." },
      { label: "E", text: "Both cardiovascular health and low stress levels depend entirely on doing regular exercise." }
    ],
    correct: "A",
    explanation: "DOĞRU CEVAP: A.\n\n💡 İKİLİ BAĞLAÇ EŞLEŞTİRMESİ:\nTürkçe cümlede 'SADECE ... KALMAZ, AYNI ZAMANDA ... DA' kalıbı vardır. İngilizce karşılığı tartışmasız 'NOT ONLY ... BUT ALSO' yapısıdır. Şıklarda bu yapıyı içeren tek şık A'dır!"
  },
  {
    id: "q_read_1",
    isPastExam: false,
    examYear: "Özgün YDS Formatı",
    category: "Paragraf Soruları",
    question: "Metin:\n'Deep-sea coral reefs, found at depths ranging from 200 to over 2,000 meters, thrive in complete darkness and icy waters without the photosynthetic algae that sustain their shallow-water counterparts. Instead, these fragile ecosystems rely entirely on organic particles drifting down from the upper ocean layers. Recent underwater exploratory missions have revealed that these ancient reefs provide vital nursery habitats for commercially valuable fish species. However, destructive bottom-trawling fishing practices and ocean acidification now threaten their very existence.'\n\nSoru: According to the passage, deep-sea coral reefs differ from shallow-water reefs in that they ----.",
    options: [
      { label: "A", text: "do not depend on photosynthetic algae to survive in their environment" },
      { label: "B", text: "are completely immune to human-induced ecological damage" },
      { label: "C", text: "generate their own light through complex chemical reactions" },
      { label: "D", text: "are exclusively found in warm tropical waters near the surface" },
      { label: "E", text: "do not support any marine fish species" }
    ],
    correct: "A",
    explanation: "DOĞRU CEVAP: A.\n\n💡 TARAMA (SCANNING) & DOĞRUDAN METİN EŞLEŞTİRMESİ:\nMetinde açıkça belirtilmiştir: '...thrive in complete darkness and icy waters WITHOUT the photosynthetic algae that sustain their shallow-water counterparts.' (Sığ su benzerlerini ayakta tutan fotosentetik algler olmaksızın zifiri karanlıkta yaşarlar).\nBu ifade A şıkkındaki 'do not depend on photosynthetic algae to survive' ifadesiyle birebir aynı anlamdadır.\n\n❌ Aşırı İddialı Çeldirici Tuzağı:\nB şıkkında 'completely immune' (tamamen bağışık) aşırı iddialıdır, metinde tehdit altında oldukları söyleniyor."
  }
];
