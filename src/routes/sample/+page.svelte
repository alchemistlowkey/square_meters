<script>
  let videoElement;

  const enablePiP = async () => {
    try {
      if (videoElement !== document.pictureInPictureElement) {
        await videoElement.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (error) {
      console.error("Error enabling Picture-in-Picture:", error);
    }
  };
</script>

<video bind:this={videoElement} controls width="600">
  <source
    src="https://youtu.be/mKAkIrad4vA?si=I9hmd2rLsqXBVcTR"
    type="video/mp4"
  />
  <track kind="captions" />
  Your browser does not support the video tag.
</video>

<button on:click={enablePiP}> Toggle Picture-in-Picture </button>

<style>
  video {
    margin-bottom: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
