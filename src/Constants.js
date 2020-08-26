const Quality = [80, 70, 60];

const WidthHeight1x = 533;

const WidthHeight2x = 1066;

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
    "https://images.crateandbarrel.com/is/image/Crate/OllieSofaFinolaThrowJL15/?",
    "https://images.crateandbarrel.com/is/image/Crate/VerneChairWCushSOSSF20_3D_1x1/?",
    "https://images.crateandbarrel.com/is/image/Crate/FullerQnSleeperSOSSF20_3D_1x1/$web_spill_item$/200625153019/fuller-queen-sleeper-sofa.jpg?"
];

const templateMaker =  () => {
    var template = [];
    var index = 0;

    for(let i = 0; i < ImageURL.length * 3; i++) {

        if(i !== 0) {
            index = i % 3 === 0 ? index + 1 : index;      
        }

        let image = {                    
            url: ImageURL[index],
            quality: Quality[i % 3],
            widHiOne: WidthHeight1x,
            widHiTwo: WidthHeight2x,
            format: Format
        };
    
        template.push(image);
    }

    return template;
}

const Constants = {
    images: templateMaker(),
};

export default Constants;
