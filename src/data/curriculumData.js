// 7 Haftalık (49 Günlük) Sıfırdan 70+ YDS Süper Kamp Müfredatı
// Günde 4 Saatlik Odaklanmış Bloklar:
// Blok 1 (60 dk): Kelime & Phrasal & Edat
// Blok 2 (60 dk): Gramer & Soru Tipi Taktikleri
// Blok 3 (60 dk): Soru Çözüm Kampı
// Blok 4 (60 dk): Okuma, Çeviri & Hata Defteri Analizi

export const CURRICULUM_WEEKS = [
  {
    week: 1,
    title: "1. Hafta: Temel Gramer & Çekirdek Kelime Kampı",
    goal: "Zaman uyumunu (Tenses), Edilgen Çatı (Passive) mantığını kavramak ve en sık çıkan 150 akademik kelimeyi ezberlemek.",
    targetScore: "Tahmini Seviye: 30-35 Puan",
    days: [
      {
        day: 1,
        title: "YDS Yolculuğu Başlıyor & Tenses (Zaman Uyumu)",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Akademik İsimler (Academic Nouns) - İlk 30 kelime ezberi ve telaffuz çalışması." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Tenses & Zaman Uyumu Kuralı (Past-Past / Present-Present uyumu, Since istisnası)." },
          { time: "Blok 3 (60 dk)", task: "20 Adet Tense & Zaman Uyumu sorusu çöz ve çözümleri oku." },
          { time: "Blok 4 (60 dk)", task: "1 Kısa akademik makale oku, ana fiilleri ve zamanları yuvarlak içine al." }
        ]
      },
      {
        day: 2,
        title: "Passive Voice (Edilgen Çatı) & By İpuçları",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Akademik Fiiller (Academic Verbs) - 30 yüksek frekanslı fiil kartı." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Passive Yapılar (Nesne almayan fiiller passive olamaz, 'by' ve 'in' ipuçları)." },
          { time: "Blok 3 (60 dk)", task: "20 Adet Passive & Active ayrım sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Günün yanlışlarını Hata Defteri'ne ekle ve tekrar et." }
        ]
      },
      {
        day: 3,
        title: "Modals & YDS İpuçları",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Akademik Sıfatlar (Academic Adjectives) - 30 kritik sıfat." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Modals (Past Modals: should have V3, must have V3, couldn't have V3 tuzakları)." },
          { time: "Blok 3 (60 dk)", task: "20 Adet Modals sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Kelime kartlarından 'Zorlandıklarım' listesini baştan sona tekrar et." }
        ]
      },
      {
        day: 4,
        title: "Conditionals & Wish Clauses",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Akademik Zarflar (Academic Adverbs) - -ly ile biten 25 belirleyici zarf." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Type 1, 2, 3 ve Mixed Conditionals. Devrik yapılar (Had I known, Were he to...)." },
          { time: "Blok 3 (60 dk)", task: "20 Adet Koşul Cümlesi sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "1 Akademik paragraf çevirisi yap (İngilizce -> Türkçe)." }
        ]
      },
      {
        day: 5,
        title: "Prepositions (Edatlar) & Edat Alan Fiiller",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "En kritik 30 Edat Kombinasyonu (depend on, prone to, contribute to...)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Edat Soru Çözüm Mantığı (Boşluktan önceki fiil veya sonraki isim kontrolü)." },
          { time: "Blok 3 (60 dk)", task: "25 Adet Preposition sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Zaman ve mekan edatları matrisini incele." }
        ]
      },
      {
        day: 6,
        title: "Phrasal Verbs 1 & Eş Anlam Eşleştirmesi",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "En Çok Çıkan 25 Phrasal Verb (account for, stem from, result in, cope with...)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Phrasal Verb'lerde edat mantığı (out=dışa/tükeniş, up=artış/tamamlanma)." },
          { time: "Blok 3 (60 dk)", task: "20 Phrasal Verb sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Hafta boyunca öğrenilen 140 kelimenin hızlı kart testi." }
        ]
      },
      {
        day: 7,
        title: "1. Hafta Tekrarı & Mini Deneme 1",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Hata Defteri temizliği: Hafta 1'deki tüm yanlış soruları sıfır hatayla çöz." },
          { time: "Blok 2 (60 dk)", task: "Mini Deneme 1 (25 Soru - Gramer & Kelime karma)." },
          { time: "Blok 3 (60 dk)", task: "Deneme analizi: Hangi soru tipinde kaç net çıktı? Eksik tespiti." },
          { time: "Blok 4 (60 dk)", task: "2. Haftanın planını incele ve moral depola." }
        ]
      }
    ]
  },
  {
    week: 2,
    title: "2. Hafta: Bağlaçlar (Conjunctions) Zirvesi",
    goal: "YDS'nin %40'ını oluşturan bağlaçları (Zıtlık, Sebep, Sonuç, Koşul) tam kavramak. Sınavın kaderi burada çizilir!",
    targetScore: "Tahmini Seviye: 40-45 Puan",
    days: [
      {
        day: 8,
        title: "Zıtlık Bağlaçları: Cümle Alanlar vs İsim Alanlar",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Zıtlık bağlaçları kartları (Although, Even though vs Despite, In spite of)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Altın Kural! Cümle alanlar (S+V) vs İsim alanlar (Noun/Ving) ayrımı." },
          { time: "Blok 3 (60 dk)", task: "25 Zıtlık Bağlacı sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Artı/Eksi (+ / -) duygu analizi yöntemiyle 5 cümle tamamla." }
        ]
      },
      {
        day: 9,
        title: "Geçiş Zarfları (However, Nevertheless, In contrast)",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Yeni Akademik Sıfat & Zıt Anlamlıları (detrimental vs beneficial vb.)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Noktalama işaretleri taktiği (; however, / . On the other hand,)." },
          { time: "Blok 3 (60 dk)", task: "25 Cümle içi ve geçiş zarfı sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Hata defterindeki bağlaç yanlışlarını gözden geçir." }
        ]
      },
      {
        day: 10,
        title: "Sebep & Sonuç Bağlaçları (Cause & Effect)",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Sebep bağlaçları (Because, Since, As vs Due to, Owing to, Because of)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Sonuç bağlaçları (Therefore, Thus, Hence, As a result, Consequently)." },
          { time: "Blok 3 (60 dk)", task: "25 Sebep-Sonuç sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "1 Akademik sağlık/çevre paragrafında bağlaçları tespit et." }
        ]
      },
      {
        day: 11,
        title: "Amaç, Zaman ve Koşul Bağlaçları",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Amaç (In order to, So as to vs In order that, So that) & Koşul (Unless, As long as)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Unless = If not tuzağı (Unless olan yan cümlede olumsuzluk eki bulunmaz)." },
          { time: "Blok 3 (60 dk)", task: "25 Amaç ve koşul sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Phrasal Verbs 25 yeni kart." }
        ]
      },
      {
        day: 12,
        title: "İkili Bağlaçlar (Correlative Conjunctions)",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "İkili bağlaçlar (Not only... but also, Either... or, Neither... nor, Both... and, Whether... or)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Paralellik kuralı (İlk kısımdan sonra ne gelirse ikinciden sonra da o gelir)." },
          { time: "Blok 3 (60 dk)", task: "25 İkili bağlaç sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Haftalık kelime tekrar testi." }
        ]
      },
      {
        day: 13,
        title: "Cloze Test Taktikleri (Metin İçi Gramer & Bağlaç)",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Akademik kelime tekrarı: Eş anlamlı kelime çiftleri (trigger = cause, feasible = viable)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Cloze Test'te 5 soruyu 4 dakikada çözme: Boşluğun öncesi-sonrası tarama." },
          { time: "Blok 3 (60 dk)", task: "4 Adet Cloze Test metni (Toplam 20 soru) çöz." },
          { time: "Blok 4 (60 dk)", task: "Cloze testlerdeki bilinmeyen kelimeleri sözlüğe kaydet." }
        ]
      },
      {
        day: 14,
        title: "2. Hafta Tekrarı & Bağlaç Maratonu Denemesi",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Tüm Bağlaç Matrisini 30 dakikada zihinden çiz ve tekrar et." },
          { time: "Blok 2 (60 dk)", task: "Mini Deneme 2 (30 Soru - Yoğun Bağlaç & Gramer)." },
          { time: "Blok 3 (60 dk)", task: "Deneme net hesabı ve eksik bağlaç listelemesi." },
          { time: "Blok 4 (60 dk)", task: "Hata Defteri soru çözüm turu." }
        ]
      }
    ]
  },
  {
    week: 3,
    title: "3. Hafta: Cümle Yapıları, Kısaltmalar & Phrasal Verbs",
    goal: "Relative Clauses, Noun Clauses ve Reductions (Kısaltmalar) mantığını oturtup uzun cümleleri parçalayabilmek.",
    targetScore: "Tahmini Seviye: 48-52 Puan",
    days: [
      {
        day: 15,
        title: "Relative Clauses (Sıfat Cümlecikleri) & Preposition + Which",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Yeni Akademik İsim & Sıfat." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Who, Which, That, Whose, Where, When ve 'in which, by which, through which' kuralları." },
          { time: "Blok 3 (60 dk)", task: "25 Relative Clause sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Cümlelerde ana özne ve sıfat cümleciğini ayırma egzersizi." }
        ]
      },
      {
        day: 16,
        title: "Noun Clauses (İsim Cümlecikleri) & That / Whether",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Phrasal Verbs Kampı: En sık çıkan 25 yeni fiil (carry out, bring about, put off...)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Fiilden sonra gelen That / Whether / What / How ayrımları." },
          { time: "Blok 3 (60 dk)", task: "25 Noun Clause sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Yanlış soruları Hata Defteri'ne geçir." }
        ]
      },
      {
        day: 17,
        title: "Reductions (Kısaltmalar) - Ving vs V3 (Aktif / Pasif)",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Akademik Fiil (undermine, exacerbate, facilitate, alleviate...)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Kısaltmalarda virgülden sonraki özne kuralı! Aktif ise Ving, Pasif ise V3 / Having been V3." },
          { time: "Blok 3 (60 dk)", task: "25 Kısaltma sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Okuma parçasında 10 tane kısaltılmış yapıyı tespit et." }
        ]
      },
      {
        day: 18,
        title: "Cümle Analizi (Parsing) & Uzun Cümleleri Bölme",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Kelime kartları maratonu (Toplam 300 kelimeye ulaşıldı)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: 4 satırlık YDS cümlesi nasıl 10 saniyede okunur? (Özne - Yan Cümle - Ana Fiil ayrımı)." },
          { time: "Blok 3 (60 dk)", task: "10 Uzun akademik cümleyi öğelerine ayır ve çevir." },
          { time: "Blok 4 (60 dk)", task: "Sözlükten yeni bağlaç kalıpları çıkar." }
        ]
      },
      {
        day: 19,
        title: "Edat + Hangi Kelimeler (Prepositional Verbs & Adjectives)",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Kritik Edatlı Kalıp (capable of, susceptible to, adhere to, abstain from...)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: YDS'de en çok sorulan 5 edat: TO, IN, ON, FOR, WITH." },
          { time: "Blok 3 (60 dk)", task: "25 Edat sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Hata defterini gözden geçir." }
        ]
      },
      {
        day: 20,
        title: "Gramer Bölümü Bitiş Kampı (16 Soru Pratiği)",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "6 Kelime + 10 Gramer = 16 Soru formatında süre tutarak 2 test çöz." },
          { time: "Blok 2 (60 dk)", task: "Çözülemeyen soruların taktik analizleri." },
          { time: "Blok 3 (60 dk)", task: "Zayıf olunan tek konuya (Tense, Modals, Relative vb.) 20 soru özel antrenman." },
          { time: "Blok 4 (60 dk)", task: "Kelime kartları 'Bilmediklerim' tekrarı." }
        ]
      },
      {
        day: 21,
        title: "3. Hafta Tekrarı & Gramer Zirvesi Mini Deneme",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Gramer formül özetini baştan sona oku." },
          { time: "Blok 2 (60 dk)", task: "Mini Deneme 3 (30 Soru - Gramer, Cloze ve Kelime)." },
          { time: "Blok 3 (60 dk)", task: "Puan hesabı: Hedef en az 20/30 doğru." },
          { time: "Blok 4 (60 dk)", task: "4. Hafta Cümle Tamamlama stratejisine hazırlık." }
        ]
      }
    ]
  },
  {
    week: 4,
    title: "4. Hafta: Cümle Tamamlama (Sentence Completion) Ustalaşması",
    goal: "10 Soruluk Cümle Tamamlama bölümünden en az 8 doğru çıkarmak. Zıtlık, Özne takibi ve Zaman uyumu.",
    targetScore: "Tahmini Seviye: 55-58 Puan",
    days: [
      {
        day: 22,
        title: "Cümle Tamamlama Taktik 1: Özne & Zamir Referans Takibi",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Yeni Akademik Kelime (Sociology & History temalı)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Soru kökündeki 'it, they, this, such' zamirleri hangi şıktaki özneye karşılık geliyor?" },
          { time: "Blok 3 (60 dk)", task: "20 Cümle Tamamlama sorusu çöz (Referans odaklı)." },
          { time: "Blok 4 (60 dk)", task: "Doğru şıkların neden doğru olduğunu kendi cümlelerinle açıkla." }
        ]
      },
      {
        day: 23,
        title: "Cümle Tamamlama Taktik 2: Artı/Eksi (+ / -) Duygu Analizi",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Olumlu/Olumsuz anlam taşıyan akademik kelimeler." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Although (-) ile başlıyorsa ana cümle (+) olmak zorundadır! Şıkları 10 saniyede ele." },
          { time: "Blok 3 (60 dk)", task: "20 Cümle Tamamlama sorusu çöz (+ / - analiziyle)." },
          { time: "Blok 4 (60 dk)", task: "Yanlış soruları Hata Defteri'ne ekle." }
        ]
      },
      {
        day: 24,
        title: "Cümle Tamamlama Taktik 3: Sebep-Sonuç & Koşul Şablonları",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Phrasal Verbs 25 yeni kart (give up, take up, call off, turn down...)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Because / Since ile başlayan sorularda sebep mi sonuç mu arandığını belirleme." },
          { time: "Blok 3 (60 dk)", task: "20 Cümle Tamamlama sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Zaman uyumu hatalarından elenen şıkları incele." }
        ]
      },
      {
        day: 25,
        title: "Cümle Tamamlama Taktik 4: Zaman Uyumu & Past Tuzakları",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Yeni Akademik Kelime (Science & Environment temalı)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Soru kökünde 'in the 19th century' varsa şıklarda present arama! Past şıklar öncelikli." },
          { time: "Blok 3 (60 dk)", task: "20 Cümle Tamamlama sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Kelime kartları tekrarı." }
        ]
      },
      {
        day: 26,
        title: "Cümle Tamamlama Seri Testleri (Hız ve Süre)",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Her 10 soru için 15 dakika süre tutarak 2 test (Toplam 20 soru) çöz." },
          { time: "Blok 2 (60 dk)", task: "Süre baskısında yapılan hataların kök analizi." },
          { time: "Blok 3 (60 dk)", task: "En çok takılınan 5 soru kalıbının taktiğini not al." },
          { time: "Blok 4 (60 dk)", task: "Akademik okuma: 1 makale oku." }
        ]
      },
      {
        day: 27,
        title: "Cloze Test + Cümle Tamamlama Entegrasyonu",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Edatlı kalıp ve bağlaç tekrarı." },
          { time: "Blok 2 (60 dk)", task: "2 Cloze Test (10 soru) + 10 Cümle Tamamlama (Toplam 20 soru)." },
          { time: "Blok 3 (60 dk)", task: "Çözümler ve çeldirici analizleri." },
          { time: "Blok 4 (60 dk)", task: "Hata Defteri temizliği." }
        ]
      },
      {
        day: 28,
        title: "4. Hafta Değerlendirmesi & Orta Kamp Denemesi",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Hafıza Tazeleme: İlk 4 haftanın tüm taktik özetlerini hızlıca tara." },
          { time: "Blok 2 (60 dk)", task: "Orta Kamp Denemesi (40 Soru - Kelime, Gramer, Cloze, Cümle Tamamlama)." },
          { time: "Blok 3 (60 dk)", task: "Puan hesaplaması: 40 soruda 28+ doğru hedefi (70 bandı ilk sinyal)." },
          { time: "Blok 4 (60 dk)", task: "Haftalık dinlenme ve motivasyon molası." }
        ]
      }
    ]
  },
  {
    week: 5,
    title: "5. Hafta: Çeviri (Translation) & Paraphrase (Restatement) Hilesi",
    goal: "6 Çeviri sorusunda 6/6 TAM DOĞRU (Bedava 7.5 Puan!) ve 4 Restatement sorusunda en az 3 doğru.",
    targetScore: "Tahmini Seviye: 62-66 Puan",
    days: [
      {
        day: 29,
        title: "İngilizce -> Türkçe Çeviri: 3 Adımda Kesin Çözüm",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Yeni Akademik Kelime (Economy & Politics)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: 1. Ana Cümlenin Yüklemini (Fiilini) Bul -> 2. Özneyi Bul -> 3. Şıklardan sadece sonuna bakıp 3 şıkkı 5 saniyede ele!" },
          { time: "Blok 3 (60 dk)", task: "20 İngilizce -> Türkçe çeviri sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Çözüm sürelerini ölç (Hedef soru başı 30 saniye)." }
        ]
      },
      {
        day: 30,
        title: "Türkçe -> İngilizce Çeviri: Yüklem ve Özne Avı",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Phrasal Verbs 25 yeni kart (break down, bring up, look into, make up for...)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Türkçe cümlenin sonundaki yüklemi İngilizce cümlenin ana fiiliyle eşleştir. Aktif/Pasif tuzağına dikkat et." },
          { time: "Blok 3 (60 dk)", task: "20 Türkçe -> İngilizce çeviri sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Hata defterine yanlışları kaydet." }
        ]
      },
      {
        day: 31,
        title: "Çeviri Soruları Karma Sprint (6/6 Hedefi)",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "En kritik 40 bağlaç ve edatın Türkçe karşılıkları tablosu." },
          { time: "Blok 2 (60 dk)", task: "Süre tutarak 24 Çeviri sorusu (12 İng-Tr, 12 Tr-İng) çöz." },
          { time: "Blok 3 (60 dk)", task: "Kaç soru 30 saniyenin altında çözüldü? Hız kontrolü." },
          { time: "Blok 4 (60 dk)", task: "Yanlış yapılan 1-2 sorunun yüklem ve özne analizini yap." }
        ]
      },
      {
        day: 32,
        title: "Restatement (Anlamca En Yakın Cümle) Taktikleri",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Yeni Akademik Sıfat & Eş Anlamlıları." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Soru kökündeki BAĞLACI ve MODAL'ı bul. Although varsa şıkta Despite/While ara; Must varsa Necessary/Obligatory ara." },
          { time: "Blok 3 (60 dk)", task: "15 Restatement sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Aşırı genelleme (all, every, only) tuzaklarını incele." }
        ]
      },
      {
        day: 33,
        title: "Diyalog Tamamlama (Dialogue) Soruları",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Günlük/Akademik kalıp ifadeler ve reaksiyon cümleleri." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Boşluktan hemen sonraki kişinin cevabına odaklan! Şaşırmış mı, onaylamış mı, karşı mı çıkmış?" },
          { time: "Blok 3 (60 dk)", task: "20 Diyalog Tamamlama sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Hata defterini tekrar et." }
        ]
      },
      {
        day: 34,
        title: "Çeviri + Restatement + Diyalog Karma Kampı",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Tüm soru tiplerinin taktik kartlarını gözden geçir." },
          { time: "Blok 2 (60 dk)", task: "6 Çeviri + 4 Restatement + 4 Diyalog = 14 Soru testini 25 dakikada çöz." },
          { time: "Blok 3 (60 dk)", task: "Çözüm ve eleme stratejilerini analiz et." },
          { time: "Blok 4 (60 dk)", task: "Zor kelimeler listesini oku." }
        ]
      },
      {
        day: 35,
        title: "5. Hafta Sonu Mini Deneme 4",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Haftanın tüm kelimelerini kartlardan test et." },
          { time: "Blok 2 (60 dk)", task: "Mini Deneme 4 (35 Soru - Çeviri, Diyalog, Cümle Tamamlama, Gramer)." },
          { time: "Blok 3 (60 dk)", task: "Net hesabı: Hedef 26+ doğru." },
          { time: "Blok 4 (60 dk)", task: "6. Hafta Paragraf & Akışı Bozan Cümle taktiklerine hazırlık." }
        ]
      }
    ]
  },
  {
    week: 6,
    title: "6. Hafta: Akışı Bozan Cümle, Paragraf Tamamlama & Okuma",
    goal: "Paragraf teknikleriyle 20 okuma sorusundan en az 14 net, akışı bozan ve paragraf tamamlamadan tam puan çıkarmak.",
    targetScore: "Tahmini Seviye: 66-70 Puan",
    days: [
      {
        day: 36,
        title: "Akışı Bozan Cümle (Irrelevant Sentence) Taktikleri",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Yeni Akademik Kelime (Psychology & Education)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: 1. Konu değişimi 2. Kapsam daralması/genişlemesi 3. Olumlu/Olumsuz ton sapması 4. Sahte zamirler." },
          { time: "Blok 3 (60 dk)", task: "20 Akışı Bozan Cümle sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Akışı bozan cümleyi çıkardığında paragrafın nasıl aktığını doğrula." }
        ]
      },
      {
        day: 37,
        title: "Paragraf Tamamlama (Paragraph Completion) Taktikleri",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Phrasal Verbs son paket (bring down, look forward to, run out of...)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Boşluğun bir önceki ve bir sonraki cümlesine bak. Referans kelimeleri (These, In addition, However) köprü olarak kullan." },
          { time: "Blok 3 (60 dk)", task: "20 Paragraf Tamamlama sorusu çöz." },
          { time: "Blok 4 (60 dk)", task: "Hata defterine yanlışları işle." }
        ]
      },
      {
        day: 38,
        title: "Paragraf Soruları Taktik 1: Soru Kökü Analizi & Scanning",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Yüksek Seviye Akademik Kelime." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Paragrafı okumadan önce 4 soru kökünü oku ve anahtar kelimeleri çiz! Metinde bu kelimeleri tara (Scanning)." },
          { time: "Blok 3 (60 dk)", task: "3 Paragraf (12 soru) çöz." },
          { time: "Blok 4 (60 dk)", task: "Soruların paragrafla eşleşen cümlelerini altını çizerek kontrol et." }
        ]
      },
      {
        day: 39,
        title: "Paragraf Soruları Taktik 2: Çeldiricileri Eleme Sanatı",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Kelime kartları: En çok karıştırılan eş anlamlılar." },
          { time: "Blok 2 (60 dk)", task: "Taktik: Aşırı iddialı şıklar (solely, entirely, only, best, impossible) YDS'de %90 yanlıştır. Yumuşak şıklar (may, can, could, tend to) %80 doğrudur!" },
          { time: "Blok 3 (60 dk)", task: "3 Paragraf (12 soru) çöz (Çeldirici eleme yöntemiyle)." },
          { time: "Blok 4 (60 dk)", task: "Hata Defteri kelime ve soru incelemesi." }
        ]
      },
      {
        day: 40,
        title: "Paragraf Soruları Taktik 3: Ana Fikir & Çıkarım (Inference)",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "30 Akademik Kelime (Technology & AI)." },
          { time: "Blok 2 (60 dk)", task: "Taktik: 'Main purpose' ve 'It can be inferred from the passage' soruları nasıl çözülür?" },
          { time: "Blok 3 (60 dk)", task: "4 Paragraf (16 soru) çöz." },
          { time: "Blok 4 (60 dk)", task: "Yanlış çıkarım yapılan soruların paragraftaki kanıtlarını bul." }
        ]
      },
      {
        day: 41,
        title: "Paragraf Maratonu (Süre ve Odaklanma)",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "5 Paragraf (20 soru) arka arkaya çöz (Maksimum süre 50 dakika)." },
          { time: "Blok 2 (60 dk)", task: "Metinlerdeki bilinmeyen 20 akademik kelimeyi çıkar ve kartlara ekle." },
          { time: "Blok 3 (60 dk)", task: "Hata Defteri'ndeki tüm paragraf sorularını baştan çöz." },
          { time: "Blok 4 (60 dk)", task: "Zihin tazeleme ve gevşeme egzersizi." }
        ]
      },
      {
        day: 42,
        title: "6. Hafta Değerlendirmesi & 50 Soruluk Hızlı Deneme",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Hafta 1'den 6'ya kadar tüm taktik özetlerini gözden geçir." },
          { time: "Blok 2 (60 dk)", task: "50 Soruluk Hızlı Deneme çöz (90 dakika)." },
          { time: "Blok 3 (60 dk)", task: "Net hesabı: Hedef 35+ doğru (70 barajına ulaşıldı!)." },
          { time: "Blok 4 (60 dk)", task: "Büyük Final Haftası stratejisini planla." }
        ]
      }
    ]
  },
  {
    week: 7,
    title: "7. Hafta: Büyük Final - Denemeler & 70+ Puan Zirvesi",
    goal: "80 Soruluk tam denemelerle süre yönetimini oturtmak, 56+ neti sabitlemek ve sınav günü stratejisini mükemmelleştirmek.",
    targetScore: "Tahmini Seviye: 70 - 78 Puan (HEDEF TAMAMLANDI!)",
    days: [
      {
        day: 43,
        title: "Tam Deneme 1 (80 Soru / 180 Dakika)",
        blocks: [
          { time: "Blok 1 & 2 (120 dk)", task: "Tam 80 soruluk gerçek YDS Denemesi 1 - Kesintisiz süreyle çöz." },
          { time: "Blok 3 (60 dk)", task: "Sınavı bitir, netini hesapla ($Doğru \times 1.25$). Hedef: En az 54-58 doğru." },
          { time: "Blok 4 (60 dk)", task: "Yanlış yapılan 22-26 sorunun her birini Hata Defteri'ne detaylı analizle yaz." }
        ]
      },
      {
        day: 44,
        title: "Deneme 1 Analiz Kampı & Nokta Atışı Tekrar",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Deneme 1'de en çok hata yapılan konuya (örneğin Cümle Tamamlama) 25 özel soru çöz." },
          { time: "Blok 2 (60 dk)", task: "Sınavda unutulan 50 kelimeyi kartlardan pekiştir." },
          { time: "Blok 3 (60 dk)", task: "Çeviri sorularını kontrol et: 6/6 garantilendi mi?" },
          { time: "Blok 4 (60 dk)", task: "Hata Defteri kelime quiz'i yap." }
        ]
      },
      {
        day: 45,
        title: "Tam Deneme 2 (80 Soru / 180 Dakika)",
        blocks: [
          { time: "Blok 1 & 2 (120 dk)", task: "Tam 80 soruluk gerçek YDS Denemesi 2 - Taktik sırasıyla çöz (Çeviri -> Diyalog -> Cümle Tam. -> Gramer -> Paragraf)." },
          { time: "Blok 3 (60 dk)", task: "Puan hesabı: Hedef en az 56 doğru (70.0 Puan)." },
          { time: "Blok 4 (60 dk)", task: "Hata analizi ve süre optimizasyonu (Hangi bölümde süre kaybettin?)." }
        ]
      },
      {
        day: 46,
        title: "Süre Yönetimi & Soru Sıralaması Stratejisi",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Altın Soru Çözüm Sırası: 1. Çeviri (6 soru - 6 dk) 2. Diyalog (4 soru - 4 dk) 3. Restatement (4 soru - 6 dk) 4. Cümle Tamamlama (10 soru - 15 dk)." },
          { time: "Blok 2 (60 dk)", task: "İkinci Bölüm: 5. Akışı Bozan (5 soru - 8 dk) 6. Paragraf Tamamlama (4 soru - 8 dk) 7. Kelime & Gramer (16 soru - 20 dk)." },
          { time: "Blok 3 (60 dk)", task: "Son Bölüm: 8. Paragraflar (20 soru - 60 dk) ve 9. Cloze Test (10 soru - 12 dk)." },
          { time: "Blok 4 (60 dk)", task: "En kritik 100 kelimeyi son kez tara." }
        ]
      },
      {
        day: 47,
        title: "Tam Deneme 3 (Genel Prova)",
        blocks: [
          { time: "Blok 1 & 2 (120 dk)", task: "Tam 80 soruluk Genel Prova Denemesi - Gerçek sınav saatinde (10:15) başlat." },
          { time: "Blok 3 (60 dk)", task: "Sonuç: 58-64 Net (72.5 - 80.0 Puan!). Tebrikler, 70 barajı garanti!" },
          { time: "Blok 4 (60 dk)", task: "Hata Defterindeki tüm soruları gözden geçir." }
        ]
      },
      {
        day: 48,
        title: "Hata Defteri Sıfırlama & Altın Kurallar Özeti",
        blocks: [
          { time: "Blok 1 (60 dk)", task: "Hata Defteri'nde biriken tüm yanlış soruları son bir kez çöz ve 'Temizlendi' olarak işaretle." },
          { time: "Blok 2 (60 dk)", task: "Bağlaç Matrisini, Çeviri Ana Fiil taktiğini ve Extreme Words listesini baştan sona oku." },
          { time: "Blok 3 (60 dk)", task: "Kendine güven tazeleme: 7 haftalık istatistiklerini ve çözdüğün 1500+ soruyu incele." },
          { time: "Blok 4 (60 dk)", task: "Sınav çantası hazırlığı (Kimlik, giriş belgesi, su, kurşun kalemler)." }
        ]
      },
      {
        day: 49,
        title: "Sınav Arifesi: Zihinsel Hazırlık & Zafer Günü",
        blocks: [
          { time: "Blok 1 (45 dk)", task: "Sadece 20 dakikalık hafif kelime hatırlatma kartları (Zorlanmadan, keyifle)." },
          { time: "Blok 2 (45 dk)", task: "Nefes egzersizi ve sınav anında paniklememe stratejisi." },
          { time: "Blok 3 (30 dk)", task: "Erken hafif bir akşam yemeği ve uyku hazırlığı." },
          { time: "Blok 4 (Yarın)", task: "SINAV GÜNÜ: 70+ Puanı almaya gidiyorsun! Emeğinin karşılığını alma zamanı!" }
        ]
      }
    ]
  }
];
