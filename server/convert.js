import fs from 'fs' //manipular os arquivos
import wav from 'node-wav' //converter audio
import ffmpeg from "fluent-ffmpeg" //manipular o audio
import ffmpegStatic from "ffmpeg-static" //apontar qual lib que vamos usar 

//caminho onde estou salvando o arquivo de audio
const filePath = "./tmp/audio.mp4"
//onde salvar o arquivo convertido
const outputPath = filePath.replace(".mp4", ".wav")

export const convert = () => new Promise((resolve, reject) => {
  console.log("Convertendo o vídeo...")

  ffmpeg.setFfmpegPath(ffmpegStatic)
  ffmpeg()
  .input(filePath)  //localizando arquivo para manipular
  .audioFrequency(16000)
  .audioChannels(1) //apenas 1 canal
  .format("wav")
  .on("end", () => {
    //após finalizar, recupera o arquivo
    const file = fs.readFileSync(outputPath)
    const fileDecoded = wav.decode(file) //arquivo decodificado

    const audioData = fileDecoded.channelData[0]
    const floatArray = new Float32Array(audioData)

    console.log("Vídeo convertido com sucesso!")

    resolve(floatArray)
    fs.unlinkSync(outputPath)
  })  
  .on("error", (error) => {
    console.log("Erro ao converter o vídeo", error)
    reject(error)
  })
  .save(outputPath) //salvando o arquivo e substituindo
})