const millisToMinutesAndSeconds = (millis: number) => {
    let minutes: number = Math.floor(millis / 60000);
    let seconds: any = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  export default millisToMinutesAndSeconds;