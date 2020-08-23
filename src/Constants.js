import FileSizeService from './fileSizeService';

const fileSizeService = new FileSizeService();

const Quality = [80, 70, 60];
const WidthHeight = 533;
const Format = "jpg";
const ImageURL = [
    "https://images.crateandbarrel.com/is/image/Crate/Moreau16x36PlwGroupFSSF20/?",
    "https://images.crateandbarrel.com/is/image/Crate/Eleri20x20PlwCvrSSF20/?",
    "https://images.crateandbarrel.com/is/image/Crate/BrennerPillowGroupFHF19/?",
    "https://images.crateandbarrel.com/is/image/Crate/Rayi18x18PlwCvrAV2S20?",
    "https://images.crateandbarrel.com/is/image/Crate/Avni12x18PillowCoverROF20/?",
    "https://images.crateandbarrel.com/is/image/Crate/SedonaGreyHamperWithLinerSHS18/?",
    "https://images.crateandbarrel.com/is/image/Crate/AniceBlack6x9RugPileSHF15/?",
    "https://images.crateandbarrel.com/is/image/Crate/YumiBlueMulti5x8RugPileSHF19?",
    "https://images.crateandbarrel.com/is/image/Crate/AlvarezGardenPoufSHS18/?",
    "https://images.crateandbarrel.com/is/image/Crate/OllieSofaFinolaThrowJL15/?"
];

const blankTemplate =  [      
// image
    {                    
        url: ImageURL[0],
        quality: Quality[0],
        widHi: WidthHeight,
        format: Format
    },
    {                    
        url: ImageURL[0],
        quality: Quality[1],
        widHi: WidthHeight,
        format: Format
    },
    {                    
        url: ImageURL[0],
        quality: Quality[2],
        widHi: WidthHeight,
        format: Format
    },
];

const Constants = {

    images: [
// image 1
        {                    
            url: ImageURL[0],
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[0],
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[0],
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },


// image 2
        {                    
            url: ImageURL[1],
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[1],
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[1],
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },


// image 3
        {                    
            url: ImageURL[2],
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[2],
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[2],
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },


// image 4
        {                    
            url: ImageURL[3],
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[3],
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[3],
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },

// image 5
        {                    
            url: ImageURL[4],
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[4],
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[4],
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },


// image 6
        {                    
            url: ImageURL[5],
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[5],
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[5],
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },


// image 7
        {                    
            url: ImageURL[6],
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[6],
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[6],
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },
// image 8
        {                    
            url: ImageURL[7],
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[7],
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[7],
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },

// image 9
        {                    
            url: ImageURL[8],
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[8],
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[8],
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },
// image 10
        {                    
            url: ImageURL[9],
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[9],
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[9],
            quality: Quality[2],
            widHi: WidthHeight,
            format: Format
        },
// image 11
        {                    
            url: ImageURL[10],
            quality: Quality[0],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[10],
            quality: Quality[1],
            widHi: WidthHeight,
            format: Format
        },
        {                    
            url: ImageURL[10],
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
