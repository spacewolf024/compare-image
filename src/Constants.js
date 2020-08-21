import FileSizeService from './fileSizeService';

const fileSizeService = new FileSizeService();

const Quality = [80, 70, 60];
const WidthHeight = 533;
const Format = "jpg";

const Constants = {

    images: [
// image 1
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/Moreau16x36PlwGroupFSSF20/?",
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/Moreau16x36PlwGroupFSSF20/?",
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/Moreau16x36PlwGroupFSSF20/?",
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },


// image 2
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/Eleri20x20PlwCvrSSF20/?",
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/Eleri20x20PlwCvrSSF20/?",
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/Eleri20x20PlwCvrSSF20/?",
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },


// image 3
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/BrennerPillowGroupFHF19/?",
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/BrennerPillowGroupFHF19/?",
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/BrennerPillowGroupFHF19/?",
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },


// image 4
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/Rayi18x18PlwCvrAV2S20?",
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/Rayi18x18PlwCvrAV2S20?",
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/Rayi18x18PlwCvrAV2S20?",
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },

// image 5
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/Avni12x18PillowCoverROF20/?",
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/Avni12x18PillowCoverROF20/?",
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/Avni12x18PillowCoverROF20/?",
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },


// image 6
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/SedonaGreyHamperWithLinerSHS18/?",
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/SedonaGreyHamperWithLinerSHS18/?",
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "https://images.crateandbarrel.com/is/image/Crate/SedonaGreyHamperWithLinerSHS18/?",
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },


// image 7
        {                    
            url: "",
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "",
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "",
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },
// image 7
        {                    
            url: "",
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "",
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: "",
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },



    ],
    fileSize: (url) => {
        fileSizeService.getFilesize(url, (size) => {
          return size;
        });
      }

};

export default Constants;
