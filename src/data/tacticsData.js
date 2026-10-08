// YDS 70+ Altın Soru Çözüm Taktikleri & Hileleri
// Soru tiplerine özel 56 Net garanti stratejileri

export const TACTICS_DATA = [
  {
    id: "translation",
    title: "1. Çeviri Soruları (6 Soru = 7.5 Puan)",
    badge: "HEDEF: 6/6 (Bedava Puan!)",
    readTime: "3 dk",
    summary: "YDS'nin en kolay ve hata payı sıfır olması gereken bölümü. 3 adımda her soruyu 20 saniyede çözün.",
    steps: [
      {
        step: "1. Adım: Cümlenin ANA YÜKLEMİNİ (Main Verb) Bul",
        detail: "İngilizce cümlenin asıl yüklemini bulun. Çeviride Türkçe cümlenin EN SONUNDAKİ fiil ile birebir uyuşmalıdır. (Örn: 'has been recognized' -> 'kabul edilmiştir'). Şıkların sadece sonundaki fiillere bakın, 5 şıktan en az 3'ü sadece yüklemden elenir!"
      },
      {
        step: "2. Adım: ÖZNEYİ (Subject) Bul",
        detail: "Fiilden önceki ana özneyi tespit edin. Türkçe cümlenin genellikle en başında yer alır. Tekil/çoğul veya sıfat tamlaması durumunu kontrol edin. Kalan 2 şıktan biri özne uyumsuzluğundan elenir."
      },
      {
        step: "3. Adım: Zaman & Modal Eşleştirmesi",
        detail: "Cümlede 'must' varsa 'zorundadır', 'may/can' varsa '-ebilmektedir', 'used to' varsa '-irdi/yapardı' aranır. Asla tüm cümleyi baştan sona çevirmeye çalışıp vakit kaybetmeyin!"
      }
    ],
    goldenRule: "ALTIN KURAL: İngilizceden Türkçeye çeviride ŞIKLARIN SON KELİMELERİNE (yüklemlere) bakın. Türkçeden İngilizceye çeviride ise TÜRKÇE CÜMLENİN EN SONUNDAKİ YÜKLEMİ İngilizce şıkların ana fiilinde arayın.",
    example: {
      question: "Although modern medicine has advanced significantly, chronic diseases still pose a major threat to public health.",
      analysis: "1. Ana yüklem: 'pose a major threat' -> 'büyük bir tehdit oluşturmaktadır / oluşturur'.\n2. Ana özne: 'chronic diseases' -> 'kronik hastalıklar'.\n3. Bağlaç: 'Although' -> '-e rağmen / karşın'.\nSonucu: Şıklarda sonu 'oluşturmaktadır' ile biten ve başında 'rağmen' olan tek şıkkı 10 saniyede işaretleyin!"
    }
  },
  {
    id: "conjunctions",
    title: "2. Bağlaç Matrisi (The Holy Grail)",
    badge: "YDS'nin %40'ı",
    readTime: "4 dk",
    summary: "Cümle Tamamlama, Gramer ve Cloze Test sorularının omurgası. Kendisinden sonra Cümle alanlar vs İsim alanlar ayrımı.",
    matrix: [
      {
        category: "Zıtlık (Concession / Contrast)",
        sentenceGroup: "Although, Even though, Though, While, Whereas (+ Cümle: S+V)",
        nounGroup: "Despite, In spite of, Notwithstanding (+ İsim / Ving)",
        adverbGroup: "However, Nevertheless, Nonetheless, On the contrary (Noktalı virgül veya nokta sonrası)"
      },
      {
        category: "Sebep (Cause)",
        sentenceGroup: "Because, Since, As, Given that, Seeing that (+ Cümle: S+V)",
        nounGroup: "Due to, Because of, Owing to, On account of, Thanks to (+ İsim / Ving)",
        adverbGroup: "Therefore, Thus, Hence, As a result, Consequently (Sonuç bildirir)"
      },
      {
        category: "Amaç (Purpose)",
        sentenceGroup: "So that, In order that (+ Cümle: S+Modal+V)",
        nounGroup: "In order to + V1, So as to + V1, For + Ving / Noun",
        adverbGroup: "With the aim of / With a view to + Ving"
      },
      {
        category: "Koşul (Condition)",
        sentenceGroup: "If, Provided that, As long as, Unless (= If not) (+ Cümle)",
        nounGroup: "In case of, Without, But for (+ İsim)",
        adverbGroup: "Otherwise, Or else (Aksi takdirde)"
      }
    ],
    goldenRule: "ELEME TAKTİĞİ: Boşluktan sonra tam bir CÜMLE (Özne + Fiil) mi var, yoksa sadece bir İSİM TAMLAMASI mı var? Eğer boşluktan sonra fiil yoksa Although, Because, Since hemen elenir; Despite, Due to aranır!",
    example: {
      question: "---- the heavy economic sanctions, the country managed to increase its industrial exports.",
      analysis: "Boşluktan sonra 'the heavy economic sanctions' geliyor (fiil yok, isim öbeği). Bu yüzden Although, Because, Since elenir! Doğru cevap 'Despite' veya 'In spite of' olmak zorundadır."
    }
  },
  {
    id: "sentence_completion",
    title: "3. Cümle Tamamlama (10 Soru = 12.5 Puan)",
    badge: "HEDEF: 8/10",
    readTime: "4 dk",
    summary: "En çok puan getiren ama en çok çeldirici barındıran bölüm. Artı/Eksi (+ / -) ve Özne Referansı taktiği.",
    steps: [
      {
        step: "1. Taktik: Artı/Eksi (+ / -) Duygu Dengesi",
        detail: "Eğer cümle bir ZITLIK bağlacı ile başlıyorsa (Although, Despite, While vb.), virgülden önceki kısım olumlu (+) ise, virgülden sonraki kısım KESİNLİKLE olumsuz (-) olmak zorundadır. Örn: 'Despite great efforts (+), they failed to prevent the crisis (-)'."
      },
      {
        step: "2. Taktik: Özne ve Zamir Referans Eşleşmesi",
        detail: "Soru kökünde 'they, it, these findings, such problems' gibi referanslar varsa, şıklarda bu zamirin karşılık geldiği çoğul/tekil isim bulunmalıdır. Şıkta 'scientists' varsa ana cümlede 'they' onu karşılar."
      },
      {
        step: "3. Taktik: Zaman Uyumu Kuralı",
        detail: "Soru kökü Past Tense (V2, was/were, had V3) ise, bağlaç olmadığı sürece şıklarda Present Perfect (have/has V3) veya Present Continuous aranmaz. Zaman tünelinden çıkmayın!"
      }
    ],
    goldenRule: "TUZAK UYARISI: İki zıtlık bağlacı aynı cümlede yan yana KULLANILMAZ! Soru kökünde 'Although' varsa, şıklarda 'but / however' arayan şıklar doğrudan YANLIŞTIR.",
    example: {
      question: "Although renewable energy sources have become considerably cheaper in recent years, ----.",
      analysis: "Soru kökü: 'Although' (Zıtlık) + 'cheaper' (+ Olumlu durum). Aradığımız şık olumsuz (-) bir durum içermelidir! 'fossil fuels continue to dominate the global market' (-) aranan doğru cevaptır."
    }
  },
  {
    id: "irrelevant_sentence",
    title: "4. Akışı Bozan Cümle (5 Soru = 6.25 Puan)",
    badge: "HEDEF: 4/5",
    readTime: "3 dk",
    summary: "Paragrafta anlam bütünlüğünü bozan yabancı cümleyi 4 filtreyle tespit edin.",
    steps: [
      {
        step: "Filtre 1: Konu (Topic) Sapması",
        detail: "Paragraf örneğin 'Güneş pillerinin verimliliği' anlatırken, araya 'Güneşin samanyolundaki konumu' girmişse konu sapmıştır."
      },
      {
        step: "Filtre 2: Kapsam (Scope) Sapması",
        detail: "Paragraf 'Tüm dünyadaki su kıtlığı'nı genel anlatırken aniden tek bir cümlenin 'Antalya'daki sulama kanallarına' inip sonra tekrar dünya genelini anlatması kapsam hatasıdır."
      },
      {
        step: "Filtre 3: Zamir (Pronoun) Boşluğu",
        detail: "Bir cümle 'This discovery revolutionized...' diye başlıyorsa, bir önceki cümlede MUTLAKA bir keşiften (discovery) bahsedilmiş olmalıdır. Bahsedilmediyse o cümle veya önceki cümle akışı bozuyordur."
      },
      {
        step: "Filtre 4: Doğrulama Testi",
        detail: "Şüphelendiğiniz cümleyi parmağınızla kapatın ve bir önceki cümle ile bir sonraki cümleyi art arda okuyun. Anlam su gibi akıyorsa, kapattığınız cümle kesinlikle akışı bozan cümledir!"
      }
    ],
    goldenRule: "İPUCU: İlk cümle (I. Cümle) nadiren akışı bozar (yaklaşık %5 ihtimal). En çok akışı bozan cümleler III ve IV. cümlelerdir (yaklaşık %70 ihtimal).",
    example: {
      question: "(I) Sleep deprivation impairs cognitive functions. (II) Chronic lack of sleep is linked to cardiovascular problems. (III) Many people prefer reading books before sleeping. (IV) Furthermore, immune defenses weaken without adequate rest.",
      analysis: "I, II ve IV numaralı cümleler 'uykusuzluğun zararları' üzerinedir. III numaralı cümle ise 'kitap okuma tercihi' diyerek konuyu dağıtmıştır. Doğru cevap III."
    }
  },
  {
    id: "reading_comprehension",
    title: "5. Paragraf Soruları (20 Soru = 25 Puan)",
    badge: "En Büyük Puan Kaynağı",
    readTime: "4 dk",
    summary: "Metnin tamamını kelime kelime çevirmeye çalışmayın. Soru kökünü okuyun, tarayın ve aşırı iddialı şıkları eleyin.",
    steps: [
      {
        step: "Kural 1: Önce Soru Köklerini Oku",
        detail: "Metne başlamadan önce 4 sorunun da kökünü hızlıca okuyun. 'According to the passage, why...', 'The author emphasizes that...' gibi ifadelerdeki kilit kelimeleri aklınızda tutun."
      },
      {
        step: "Kural 2: Aşırı İddialı (Extreme) Şıkları Ele!",
        detail: "YDS akademik bir sınavdır ve bilim insanları kesin konuşmaz. Şıkta 'only, solely, completely, impossible, all, never, always, undisputed' varsa %90 YANLIŞTIR! Şıkta 'may, can, could, likely, tends to, partially, some' gibi ihtiyatlı kelimeler varsa %80 DOĞRUDUR!"
      },
      {
        step: "Kural 3: Eş Anlamlı Kelime (Paraphrase) Avı",
        detail: "Doğru şık, metindeki cümlenin kelimesi kelimesine kopyası OLMAZ! Metinde 'crucial' diyorsa şıkta 'essential/vital', metinde 'deteriorate' diyorsa şıkta 'worsen' olarak karşınıza çıkar."
      }
    ],
    goldenRule: "ASLA KENDİ YORUMUNUZU KATMAYIN: 'Bence de öyle, genel kültürümden biliyorum' diyerek şık işaretlemeyin. Doğru cevabın mutlaka metinde bir cümle karşılığı olmalıdır.",
    example: {
      question: "Metin: 'The findings suggest that moderate exercise could reduce the risk of heart disease in elderly patients.'",
      analysis: "Şık A: 'Exercise completely cures all cardiovascular disorders.' -> (completely, all = YANLIŞ!)\nŞık B: 'Physical activity may offer protective benefits against cardiac problems.' -> (may, protective benefits = DOĞRU EŞ ANLAM!)"
    }
  },
  {
    id: "restatement",
    title: "6. Anlamca En Yakın Cümle (Restatement)",
    badge: "HEDEF: 3/4",
    readTime: "3 dk",
    summary: "Cümleyi yeniden ifade etme sorularında kilit bağlaç ve derece zarflarını eşleştirin.",
    steps: [
      {
        step: "1. Anahtar Bağlacı Eşleştir",
        detail: "Soru kökünde 'Although / Even though' varsa doğru şıkta 'Despite / While / In spite of / Nevertheless' ara."
      },
      {
        step: "2. Miktar & Derece Zarflarını Kontrol Et",
        detail: "Soru kökünde 'almost all' diyorsa şıkta 'all' olamaz. Soru kökünde 'rarely' diyorsa şıkta 'hardly ever' veya 'seldom' aranır."
      },
      {
        step: "3. Koşul & Neden-Sonuç Eşleştirmesi",
        detail: "'If it hadn't been for...' -> 'Without...' veya 'But for...'. 'Because of...' -> 'Due to...' veya 'Stemming from...'"
      }
    ],
    goldenRule: "ANLAM DARALMASI VEYA GENİŞLEMESİ: Doğru şık ne soru kökünden daha az şey söylemeli ne de soru kökünde olmayan yeni bir iddia eklemelidir.",
    example: {
      question: "Had the government intervened earlier, the inflation rate would not have surged so dramatically.",
      analysis: "Cümle Type 3 Conditional (geçmişte müdahale edilmedi ve enflasyon fırladı). Aranan şık: 'The sharp increase in inflation occurred because the government failed to take timely action.'"
    }
  }
];
