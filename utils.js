/*$('a').click(function(){
    $(this).toggleClass('active');
 });*/

const img_arry = ['https://i.pinimg.com/474x/23/45/ff/2345ffa2bb3524c0bfab1680a0a25317.jpg', 'https://i.pinimg.com/474x/ee/dc/74/eedc74f7eb06dcb158c3815750da43d1.jpg', 'https://i.pinimg.com/474x/4d/f7/1f/4df71f43f3c7e3ac7887520220f0dc85.jpg', 'https://i.pinimg.com/474x/4a/31/55/4a31556ca8e38e4de3b64522de165b84.jpg', 'https://i.pinimg.com/474x/0a/c4/dd/0ac4ddb02420b1780c674beb2c5aac61.jpg', 'https://i.pinimg.com/474x/17/aa/54/17aa54221cf7049f53d5cd665cdc0933.jpg', 'https://i.pinimg.com/474x/f6/b1/80/f6b1803acda7ff186697845210ec107d.jpg', 'https://i.pinimg.com/474x/ab/76/eb/ab76eb2b8273822e2343099a7c52229e.jpg', 'https://i.pinimg.com/474x/c0/2d/93/c02d939a401f2fbdd030cced22ceab8a.jpg', 'https://i.pinimg.com/474x/4a/e2/73/4ae273313c3607e98c3bc4a59ad9f1b5.jpg', 'https://i.pinimg.com/474x/63/ac/93/63ac9360cc199ed7f909d36201c1e19d.jpg', 'https://i.pinimg.com/474x/f7/a6/3f/f7a63fa8723c01a75bf60ffa5b6fc825.jpg', 'https://i.pinimg.com/474x/7d/08/f5/7d08f5151bef07198050b6a495943a43.jpg', 'https://i.pinimg.com/474x/e2/4f/3b/e24f3bf5372904d24ecfab5fe72fb2d8.jpg', 'https://i.pinimg.com/474x/4b/7d/04/4b7d044c4f48eb27d00c2437ed561196.jpg', 'https://i.pinimg.com/474x/08/94/cc/0894ccfa07b361285860785aac3c380f.jpg', 'https://i.pinimg.com/474x/80/99/68/8099689764ef9537d722f849fd01f18d.jpg', 'https://i.pinimg.com/474x/01/d6/ab/01d6ab79b146c4f752993f09063b9498.jpg', 'https://i.pinimg.com/474x/ab/c9/f9/abc9f904c361bdf5061e046921df1d51.jpg', 'https://i.pinimg.com/474x/1d/76/8e/1d768e12fd17c781473398582e2eedb8.jpg', 'https://i.pinimg.com/474x/3d/f4/b9/3df4b9ce4e2cc1257d22a3575544ffd4.jpg', 'https://i.pinimg.com/474x/21/d4/f3/21d4f33af24a7d0b37822878cd2fef6f.jpg', 'https://i.pinimg.com/474x/5a/5f/d5/5a5fd5a4c08c754af0ae33f469037f34.jpg', 'https://i.pinimg.com/474x/f3/4b/cd/f34bcd71e2b210ff2d123356721077ec.jpg', 'https://i.pinimg.com/474x/b5/e1/a2/b5e1a2a3423d0a618fe2dc1b2a0090a5.jpg', 'https://i.pinimg.com/474x/4e/44/7b/4e447b8fa739d2619211b0e31a65f069.jpg', 'https://i.pinimg.com/474x/8b/fd/a7/8bfda704fc514cd7ed57f1759ad555c0.jpg', 'https://i.pinimg.com/474x/0e/b7/ea/0eb7ea2cdf9e97426f4bddda3803749a.jpg', 'https://i.pinimg.com/474x/85/61/a3/8561a3fa67fd893d161f5375aeab8fc3.jpg', 'https://i.pinimg.com/474x/31/00/86/3100869dd87838e979a23e72fee05cf4.jpg', 'https://i.pinimg.com/474x/35/fc/8f/35fc8fc87ce58cb79ec6bbdd79830903.jpg', 'https://i.pinimg.com/474x/a3/76/6d/a3766ddd71fe61bf0a0a8b242f761a7f.jpg', 'https://i.pinimg.com/474x/18/80/f8/1880f8b2680687d9a5969cadeaec8068.jpg', 'https://i.pinimg.com/474x/f7/80/8a/f7808a82bcd271817bc2de77c506f11c.jpg', 'https://i.pinimg.com/474x/82/0f/9a/820f9a7d39ac8be8136483faa5ba7728.jpg', 'https://i.pinimg.com/474x/22/6c/18/226c186e90d0938bcbd06afcb74fcb95.jpg', 'https://i.pinimg.com/474x/9f/26/2e/9f262ee740dd2beb934dddd997a4e9aa.jpg', 'https://i.pinimg.com/474x/d7/0a/e7/d70ae7ce611e6b01c64b01c712c8017e.jpg', 'https://i.pinimg.com/474x/e3/cf/e6/e3cfe6b109fd72eb9ff44cec6a56bb77.jpg', 'https://i.pinimg.com/474x/f3/93/d7/f393d7437bcdc4aa0353a32f683a0f48.jpg', 'https://i.pinimg.com/474x/11/9a/61/119a611f30551f0560f44e0c14ad5464.jpg', 'https://i.pinimg.com/474x/61/ce/95/61ce952b75b0b0171275102c80b67243.jpg', 'https://i.pinimg.com/474x/6e/fe/83/6efe83d062053c318e7ed9ccf799319b.jpg', 'https://i.pinimg.com/474x/47/25/b9/4725b9dd84abb64b2a114d905d0cb270.jpg', 'https://i.pinimg.com/474x/2f/cd/9b/2fcd9b5d925d9ff967a3d6d580d17e95.jpg', 'https://i.pinimg.com/474x/dd/99/af/dd99affca773dfe6b4857ccafebdba3f.jpg', 'https://i.pinimg.com/474x/6c/fd/b9/6cfdb993391385c8c98524f4f9df9418.jpg', 'https://i.pinimg.com/474x/e2/6d/dd/e26dddee69f73b2da42714f41481b599.jpg', 'https://i.pinimg.com/474x/25/4a/89/254a890101c7ad63c937c23a26d18b7a.jpg', 'https://i.pinimg.com/474x/d7/86/ad/d786ad2cd8373d50cd6c2bb5e3c13e1d.jpg', 'https://i.pinimg.com/474x/99/33/50/993350b0e5b4d1b97fc2079788ba2b89.jpg', 'https://i.pinimg.com/474x/b5/e1/a2/b5e1a2a3423d0a618fe2dc1b2a0090a5.jpg', 'https://i.pinimg.com/474x/4e/44/7b/4e447b8fa739d2619211b0e31a65f069.jpg', 'https://i.pinimg.com/474x/8b/fd/a7/8bfda704fc514cd7ed57f1759ad555c0.jpg', 'https://i.pinimg.com/474x/ab/76/eb/ab76eb2b8273822e2343099a7c52229e.jpg', 'https://i.pinimg.com/474x/c0/2d/93/c02d939a401f2fbdd030cced22ceab8a.jpg', 'https://i.pinimg.com/474x/4a/e2/73/4ae273313c3607e98c3bc4a59ad9f1b5.jpg', 'https://i.pinimg.com/474x/63/ac/93/63ac9360cc199ed7f909d36201c1e19d.jpg', 'https://i.pinimg.com/474x/1e/1f/8d/1e1f8dfc8c55a0e383be208a741ef5b9.jpg', 'https://i.pinimg.com/474x/88/54/58/8854583039194612de48f3eef98eb7ff.jpg', 'https://i.pinimg.com/474x/ea/c9/14/eac914d15f69518ec1db2528ecd29c03.jpg', 'https://i.pinimg.com/474x/e1/68/cd/e168cddd1aa5ce23ab0dfe79ea4bb57e.jpg', 'https://i.pinimg.com/474x/0b/39/c3/0b39c35333c4680cdb30d59b07b6da74.jpg', 'https://i.pinimg.com/474x/12/35/a5/1235a5f7180a928b38f70d90c3b1d39f.jpg', 'https://i.pinimg.com/474x/fa/fe/dd/fafedde701c3b54fb61df67adfda8d0e.jpg', 'https://i.pinimg.com/474x/b4/9e/b7/b49eb7514930f3ccdba01eadb1dc34e5.jpg']; 

let shuffledArray = [];



function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

window.onload = function() {
    shuffle(img_arry);
    
    for (let i = 0; i < img_arry.length; i ++) {

        var img = document.createElement('img'); 
        img.src = img_arry[i];
        img.class = 'image';
        document.getElementById('gallery').appendChild(img);

    };
};



console.log(img_arry)