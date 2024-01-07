# TrendyolCommentAnalysis
 
<h2> 1) Projenin Geliştirilme Aşamaları </h2>

Projenin geliştirilmesinde ilk olarak girilen metinleri konularına göre sınıflandıracak yapay zekâ modelinin eğitimi için bir veri seti araştırılması yapılmıştır. Projede Kaggle [1] sitesindeki 7 farklı kategoriden ('Dünya', 'Ekonomi', 'Kültür - Tarih', 'Sağlık', 'Siyaset', 'Spor', 'Teknoloji') oluşan veri seti kullanılmıştır. Yapay zekâ modelinin eğitimi için ücretsiz GPU desteği sağlayan Google Colaboratory ortamı tercih edilmiştir. Veri setinde gerekli ön işlemeler yapılmıştır. Veri, noktalama işaretleri, sayılardan ve bağlaçlardan arındırılmıştır.  Model eğitimi için “Logistic Regression” algoritması tercih edilmiştir. Veri seti boyutu çok büyük olmadığından dolayı yaklaşık olarak %83 doğruluk elde edilebilmiştir.
Eğitim tamamlandıktan sonra kaydedilen model dosyası kullanıcıdan alınan metinler üzerinde sınıflandırma yapılarak test edilmiştir. Metin içerisindeki en çok frekansa sahip kelimeler alt başlıklar olarak kabul edilmiştir. Elde edilen bu alt başlıklar ile Wikipedia sitesinde araştırma yapılmıştır ve kullanıcıya bilgi verilmiştir. Wikipedia sitesinde araştırma yapılmasının sebebi Google’da bulunan web sitelerinin yapılarının birbirinden farklı olmasıdır. Farklı yapılardaki sitelerden verileri çekmek için verinin bulunduğu etiketleri değiştirmek gerekmektedir. Bu nedenle tek bir site üzerinden araştırma sonuçlarının alınmasına karar verilmiştir. Son olarak elde edilen tüm bilgiler Microsoft SQL Server veri tabanında tablolara kayıt edilmiştir.

<h2> 2) Projede Elde Edilen Çıktılar </h2>

Kullanıcıya sunulan menü ekranı Şekil 1’de görülmektedir.
<div align="center">
    <img src="https://github.com/hediyeorhan/TextClassificationAndSearching/assets/59260491/c0564213-7297-4c79-9987-7d456f2389ba" alt="Şekil 1: Kullanıcıya sunulan menü ekranı">
</div>
<div align="center">
    <p>Şekil 1: Kullanıcıya sunulan menü ekranı</p>
</div>




 
