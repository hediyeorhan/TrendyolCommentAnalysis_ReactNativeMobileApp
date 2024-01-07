# TrendyolCommentAnalysis
<table>
    <tr>
        <td>
            <img src="https://github.com/hediyeorhan/TextClassificationAndSearching/assets/59260491/f0ad0d69-2d62-4e79-aafc-97e19d56137a">
        </td>
        <td>
            <img src="https://github.com/hediyeorhan/TextClassificationAndSearching/assets/59260491/3e892317-3b04-46d9-93d8-f14f37d1eba8">
        </td>
        <td>
            <img src="https://github.com/hediyeorhan/TextClassificationAndSearching/assets/59260491/02a606ed-50fc-4da7-a05b-7e336c363413">
        </td>
    </tr>
</table>
<h2> [EN] </h2>

In this study, a mobile application was developed with react native. The mobile application classifies the reviews of a particular product on Trendyol, an e-commerce website, as negative, positive and neutral. In the mobile application, there is an input field where the link of the comments of the product to be analyzed can be entered. Then, the categorized versions of these comments are displayed on the application interface.

Selenium library was used to pull comments from the e-commerce site. Logistic regression algorithm was used to classify the extracted comments.

The extraction and classification of data is based on an API code. When the url address of a product is entered in the React native mobile application, a request is sent to the api code. Here the data is extracted and classified. The classified data is sent to react native mobile application. Data extraction and classification codes can be accessed from the api folder.

The api code is executed in a docker container.  The Jetson nano developer kit device acts as a server. The api code runs in the docker installed on Jetson nano. The DockerFile prepared for the project can be accessed from the api folder.

The sequential commands for the creation and operation of a Docker container are:

```ini
  docker build -t docker_api .
  ```
Command output: 

<div align="center">
    <img src="https://github.com/hediyeorhan/TextClassificationAndSearching/assets/59260491/b156f33d-ea1e-4e55-9e20-e06c634ec8dc" alt="Figure 1: Docker build command output">
</div>
<div align="center">
    <p>Figure 1: Docker build command output </p>
</div>

```ini
  docker run -it --net=host docker_api
  ```
Command output: 

<div align="center">
    <img src="https://github.com/hediyeorhan/TextClassificationAndSearching/assets/59260491/ae07a972-7a63-4e1d-8b91-46ed5baec9e9" alt="Figure 2: Docker run command output">
</div>
<div align="center">
    <p>Figure 2: Docker run command output </p>
</div>


<h2> [TR] </h2>

Bu çalışmada react native ile bir mobil uygulama geliştirilmiştir. Geliştirilen mobil uygulama bir e-ticaret sitesi olan Trendyol üzerindeki belirli bir ürüne ait yorumları  negatif, pozitif ve nötr olarak sınıflandırmaktadır. Mobil uygulamada analizi istenilen ürüne ait yorumların linkinin girileceği bir input alanı bulunmaktadır. Sonrasında bu yorumların sınıflandırılmış halleri uygulama ara yüzünde görülmektedir.

E-ticaret sitesinden yorumların çekilmesinde Selenium kütüphanesi kullanılmıştır. Çekilen yorumların sınıflandırılması için logistic regresyon algoritması kullanılmıştır.

Verilerin çekilmesi ve sınıflandırılması bir api koduna bağlı olarak gerçekleşmektedir. React native mobil uygulamasına bir ürüne ait url adresi girildiğinde api koduna istek atılmaktadır. Burada veriler çekilmektedir ve sınıflandırılmaktadır. Sınıflandırılan veriler react native mobile uygulamasına gönderilmektedir. Veri çekme ve sınıflandırma kodlarına api klasörü içerisinden erişilebilmektedir.

Api kodu bir docker konteynır içerisinde çalıştırılmıştır.  Jetson nano developer kit cihazı sunucu görevi üstlenmiştir. Jetson nano üzerine kurulan docker içerisinde api kodu çalışmaktadır. Proje için hazırlanan DockerFile dosyasına api klasöründen erişilebilir.

Docker konteynırının oluşturulması ve çalışması için sıralı komutlar şunlardır:

```ini
  docker build -t docker_api .
  ```

Komut çıktısı: 
<div align="center">
    <img src="https://github.com/hediyeorhan/TextClassificationAndSearching/assets/59260491/b156f33d-ea1e-4e55-9e20-e06c634ec8dc" alt="Figure 1: Docker build command output">
</div>
<div align="center">
    <p>Figure 1: Docker build komut çıktısı</p>
</div>

```ini
  docker run -it --net=host docker_api
  ```

Komut çıktısı: 

<div align="center">
    <img src="https://github.com/hediyeorhan/TextClassificationAndSearching/assets/59260491/ae07a972-7a63-4e1d-8b91-46ed5baec9e9" alt="Şekil 2: Docker run komutu çıktısı">
</div>
<div align="center">
    <p>Şekil 2: Docker run komutu çıktısı</p>
</div>

