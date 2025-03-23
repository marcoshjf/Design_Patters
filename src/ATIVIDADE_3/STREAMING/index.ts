interface Media {
    play(): void;
    stop(): void;
  }
  
  class AudioMedia implements Media {
    play(): void {
      console.log("Tocando áudio...");
    }
    stop(): void {
      console.log("Parando áudio.");
    }
  }
  
  class VideoMedia implements Media {
    play(): void {
      console.log("Reproduzindo vídeo...");
    }
    stop(): void {
      console.log("Parando vídeo.");
    }
  }
  
  class PodcastMedia implements Media {
    play(): void {
      console.log("Tocando podcast...");
    }
    stop(): void {
      console.log("Parando podcast.");
    }
  }
  
  type MediaType = "audio" | "video" | "podcast";
  
  class MediaFactory {
    static createMedia(type: MediaType): Media {
      switch (type) {
        case "audio":
          return new AudioMedia();
        case "video":
          return new VideoMedia();
        case "podcast":
          return new PodcastMedia();
        default:
          throw new Error(`Tipo de mídia inválido: ${type}`);
      }
    }
  }
  
  function playMedia(type: string) {
    try {
      const media = MediaFactory.createMedia(type as MediaType);
      media.play();
      media.stop();
    } catch (error) {
      console.error((error as Error).message);
    }
  }
  
  // Testes:
  playMedia("audio");    // ✔ Tocando áudio... / Parando áudio.
  playMedia("video");    // ✔ Reproduzindo vídeo... / Parando vídeo.
  playMedia("podcast");  // ✔ Tocando podcast... / Parando podcast.
  playMedia("livro");    // ❌ Tipo de mídia inválido: livro
  