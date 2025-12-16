const suraCumulativeAyahsArray = [
  0, 7, 293, 493, 669, 789, 954, 1160, 1235, 1364, 1473,
  1596, 1707, 1750, 1802, 1901, 2029, 2140, 2250, 2348, 2483,
  2595, 2673, 2791, 2855, 2932, 3159, 3252, 3340, 3409, 3469,
  3503, 3533, 3606, 3660, 3705, 3788, 3970, 4058, 4133, 4218,
  4272, 4325, 4414, 4473, 4510, 4545, 4583, 4612, 4630, 4675,
  4735, 4784, 4846, 4901, 4979, 5075, 5104, 5126, 5150, 5163,
  5177, 5188, 5199, 5217, 5229, 5241, 5271, 5323, 5375, 5419,
  5447, 5475, 5495, 5551, 5591, 5622, 5672, 5712, 5758, 5800,
  5829, 5848, 5884, 5909, 5931, 5948, 5967, 5993, 6023, 6043,
  6058, 6079, 6090, 6098, 6106, 6125, 6130, 6138, 6146, 6157,
  6168, 6176, 6179, 6188, 6193, 6197, 6204, 6207, 6213, 6216,
  6221, 6225, 6230, 6236
];


(async () => {
  const uz_text_api = await axios.get(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-muhammadsodikmu.json"
  );

  const arb_text_api = await axios.get(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranbazzi.json"
  );

  const audio_api = await axios.get("https://api.alquran.cloud/v1/quran/ar.alafasy")

  inputElement.addEventListener("keydown", (e) => {

    if (e.keyCode == 13) {
      list.innerHTML = null;
      surahName.innerHTML = null;

      const surah = uz_text_api.data.quran.filter(
        (oyat) => oyat.chapter == inputElement.value
      );

      const surah_arb = arb_text_api.data.quran.filter(
        (oyat) => oyat.chapter == inputElement.value
      );

      const audio = audio_api.data.data.surahs.find(surah => surah.number == inputElement.value)
      const suraName = document.createElement("h3")
      suraName.textContent = audio.englishName              
      surahName.append(suraName)



      for(let i = 0; i < surah.length; i++){
    
        const li = document.createElement("li");
        const h2= document.createElement("h2");
        const h4 = document.createElement("h4");

        h4.textContent = surah[i].text;
        h2.textContent = surah_arb[i].text;

        const audio = audio_api.data.data.surahs.find(surah => surah.number == inputElement.value)
        const a = audio.ayahs.find(ayah => ayah.number == ((i + 1) + suraCumulativeAyahsArray[inputElement.value - 1]))
        

        li.append(h2,h4)
        list.append(li);

        list.innerHTML += `
        <div>
        <audio src="${a.audio}" controls></audio>
        </div>
        `
      }
    }
  });
})();
