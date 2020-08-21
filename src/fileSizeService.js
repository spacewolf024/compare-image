export default class FileSizeService { 

    getFilesize = (url, callback) => {
        const xhr = new XMLHttpRequest();
        const self = this;
        xhr.open("HEAD", url, true); 
        xhr.onreadystatechange = function() {

            if (this.readyState === this.DONE) {
                callback(self.formatBytes(parseInt(xhr.getResponseHeader("Content-Length"))));
            }
        };
        xhr.send();
      }
    
      formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      
        const i = Math.floor(Math.log(bytes) / Math.log(k));
      
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
      }
}
