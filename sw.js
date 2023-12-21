importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"cd2a84a9d406609b6af31751adb582ca","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"ead24403f2d490ece51621e2e989d631","url":"feedback.html"},{"revision":"07dc6d602d46fb4d3aa63d4ece2b7098","url":"images/Capture-03-1.png"},{"revision":"381df7cc984efa76ea43468ada0bd966","url":"images/preQ2.png"},{"revision":"0da1e9f6e80dc0d233e3d12f5ecb253a","url":"images/RL load graph.png"},{"revision":"51c62dc55132c6a74c4f51a9ffee039e","url":"images/RL load.png"},{"revision":"314491dc98ea2fd3e34550b1ed976837","url":"images/RLE graph.png"},{"revision":"e74dded49ea6c7dd0ae151c7e370bf2a","url":"images/RlE load.png"},{"revision":"88696a1d5e5852183d83cfeed5124058","url":"images/Rleload.png"},{"revision":"8e0aec39bc5c93c6ccf713c880c59e26","url":"images/Rlload.png"},{"revision":"e55aee5c532d7bb1b61045ab5e6b5b8e","url":"images/Rload.png"},{"revision":"ec70eb56d7b97cd24988597b39709d95","url":"images/Rloadtheory.png"},{"revision":"4fdf49ed455b5cae1cc7d044a88e3b96","url":"images/WhatsApp Im.jpg"},{"revision":"2a8449f7bfd331f2ff12f245ae7df9cb","url":"images/WhatsApp Image 2023-06-06 at 16.08.jpg"},{"revision":"406650f23c31540402667162bc63dbd7","url":"index.html"},{"revision":"61d6c49da661d9dbbbe8938df6177a31","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"0c44a5fc37d7bed0a1fc3dc830718147","url":"posttest.html"},{"revision":"f630e6a2cac73995da9117b33825c867","url":"posttest.json"},{"revision":"1cc286f794398879111cf0f1724ba67f","url":"pretest.html"},{"revision":"3a36a19464e626e1e3eb73a00303e045","url":"pretest.json"},{"revision":"7ea42f0efa8d9adabcff5f1c2ceeba72","url":"procedure.html"},{"revision":"6252bdcd6b2617dbf48e4fa3eee4469a","url":"references.html"},{"revision":"302d8401151921c7d4285ef939d953d1","url":"simulation.html"},{"revision":"b665f8b686dcc79b4e9b61aecf12e2f1","url":"simulation/1 PHASE HW R Load/1 PHASE HW R Load.html"},{"revision":"c7ea774f10986445909b269f778eec26","url":"simulation/1 PHASE HW R Load/css/new-style.css"},{"revision":"3557b6baa5822ce6fe3ab7ce7ee5600d","url":"simulation/1 PHASE HW R Load/css/popup.css"},{"revision":"b5aa157c0223181200cb25b2baca5356","url":"simulation/1 PHASE HW R Load/css/style.css"},{"revision":"f270a43442ea409ec870d5745ba9b9f9","url":"simulation/1 PHASE HW R Load/js/graph.js"},{"revision":"9b5aff866a71fd93438600e9d6f08796","url":"simulation/1 PHASE HW R Load/js/popup.js"},{"revision":"7261b44739d4067c2448edbf38bffff4","url":"simulation/1 PHASE HW R Load/js/script.js"},{"revision":"9a539e10404f65529425e2988c4b7321","url":"simulation/1 PHASE HW R Load/new-img/404-error.png"},{"revision":"b5c6635804d4f6488812be9b90c82037","url":"simulation/1 PHASE HW R Load/new-img/404-tick.png"},{"revision":"0dcc5a14e004bb4716186c477bc90651","url":"simulation/1 PHASE HW R Load/new-img/404-warning.png"},{"revision":"7e6e65385c31bb14eb0b3b2ced3d3b14","url":"simulation/1 PHASE HW R Load/new-img/ac.png"},{"revision":"a248c2a5c6336c7229cd8d51a3172134","url":"simulation/1 PHASE HW R Load/new-img/acnew.png"},{"revision":"01d20b9499a37288ab7e6d4082709264","url":"simulation/1 PHASE HW R Load/new-img/acsourceuse.png"},{"revision":"18ed287d44e57586947129141feed6a1","url":"simulation/1 PHASE HW R Load/new-img/ammeter.png"},{"revision":"3d47b78c09e27e217826c71dfa10006d","url":"simulation/1 PHASE HW R Load/new-img/ammeter1.png"},{"revision":"3fc5832af8c967d93049443af274298b","url":"simulation/1 PHASE HW R Load/new-img/capacitor.png"},{"revision":"f382296f807bac07eec9be2a28ba7791","url":"simulation/1 PHASE HW R Load/new-img/capacitoruse.png"},{"revision":"0d151bb6e84c06a9f4cde6e684e08948","url":"simulation/1 PHASE HW R Load/new-img/dcsource.png"},{"revision":"d7fa6c9bb08cc9f0b5e69ce97ecadcf1","url":"simulation/1 PHASE HW R Load/new-img/dcsourceuse.png"},{"revision":"6cd599df4c098769b0b721a0b88065df","url":"simulation/1 PHASE HW R Load/new-img/gatepulse.jpg"},{"revision":"ce746f1225c7008f03e82388a734eda0","url":"simulation/1 PHASE HW R Load/new-img/gatepulse.png"},{"revision":"5e2bb214ba1935bf9aff028b669a80ee","url":"simulation/1 PHASE HW R Load/new-img/gatepulsenew.png"},{"revision":"02f710571e8e5415bad37ebd94e96e38","url":"simulation/1 PHASE HW R Load/new-img/grid2.png"},{"revision":"14dd6c1fe87c360e4cdc8d38d6d5f307","url":"simulation/1 PHASE HW R Load/new-img/ground.png"},{"revision":"97d95414be734830c923f8ac9123df09","url":"simulation/1 PHASE HW R Load/new-img/inductor.png"},{"revision":"b523106feceec706313f99e7cc060831","url":"simulation/1 PHASE HW R Load/new-img/inductoruse.png"},{"revision":"6481e91ea541998c348dfaf1ac0238ce","url":"simulation/1 PHASE HW R Load/new-img/mosfetn - Copy.png"},{"revision":"6c0c3c702185f65cefad9b21a016210d","url":"simulation/1 PHASE HW R Load/new-img/mosfetn.png"},{"revision":"03e752da1b6d27ebb259a2deef01a418","url":"simulation/1 PHASE HW R Load/new-img/notuse - Copy.png"},{"revision":"d83c476e76dae315f8ad57aa00133c66","url":"simulation/1 PHASE HW R Load/new-img/notuse.png"},{"revision":"536e356e0463574d371599dd9ccac3e8","url":"simulation/1 PHASE HW R Load/new-img/opamp.png"},{"revision":"12082f0d0803c437c2f58f85a36a4fe7","url":"simulation/1 PHASE HW R Load/new-img/opampn.png"},{"revision":"bf5a82042d9b67ac733ef2d92a705746","url":"simulation/1 PHASE HW R Load/new-img/resistor.png"},{"revision":"a338a3f0a7eeb58392e86105475ef863","url":"simulation/1 PHASE HW R Load/new-img/resistoruse.png"},{"revision":"7611bdc76761d76e2840fa9d96f54d3e","url":"simulation/1 PHASE HW R Load/new-img/switchuse - Copy.png"},{"revision":"b457d4331be35963851c860c485e261c","url":"simulation/1 PHASE HW R Load/new-img/switchuse.png"},{"revision":"7c3e05eefb65b81ee9d0f1b41c634776","url":"simulation/1 PHASE HW R Load/new-img/thyristor.png"},{"revision":"7a5700e175c1df78bc56f69a6bb4d558","url":"simulation/1 PHASE HW R Load/new-img/tri.png"},{"revision":"cc1c5e997b699dc3f738f2e4c8b2f280","url":"simulation/1 PHASE HW R Load/new-img/triwave.png"},{"revision":"35eda927115ca5d107c8ebd464908999","url":"simulation/1 PHASE HW R Load/new-img/Untitled.png"},{"revision":"2d1f76d87c9e069950c353eede04099a","url":"simulation/1 PHASE HW R Load/new-img/vmeter.png"},{"revision":"0245ddcd66bc3d9b4a64658630f6daeb","url":"simulation/1 PHASE HW R Load/new-img/vmeteruse.png"},{"revision":"902052980b34eb08b60c94b19493c89f","url":"simulation/1 PHASE HW RL Load/1 PHASE HW RL Load.html"},{"revision":"c7ea774f10986445909b269f778eec26","url":"simulation/1 PHASE HW RL Load/css/new-style.css"},{"revision":"3557b6baa5822ce6fe3ab7ce7ee5600d","url":"simulation/1 PHASE HW RL Load/css/popup.css"},{"revision":"3bace048f2c1461ca621a1f225dd9663","url":"simulation/1 PHASE HW RL Load/css/style.css"},{"revision":"03723fe4c75ccce4c099979d257691b8","url":"simulation/1 PHASE HW RL Load/js/graph.js"},{"revision":"9b5aff866a71fd93438600e9d6f08796","url":"simulation/1 PHASE HW RL Load/js/popup.js"},{"revision":"f697d8809c5ef1ac1526156e5fe42950","url":"simulation/1 PHASE HW RL Load/js/script.js"},{"revision":"9a539e10404f65529425e2988c4b7321","url":"simulation/1 PHASE HW RL Load/new-img/404-error.png"},{"revision":"b5c6635804d4f6488812be9b90c82037","url":"simulation/1 PHASE HW RL Load/new-img/404-tick.png"},{"revision":"0dcc5a14e004bb4716186c477bc90651","url":"simulation/1 PHASE HW RL Load/new-img/404-warning.png"},{"revision":"7e6e65385c31bb14eb0b3b2ced3d3b14","url":"simulation/1 PHASE HW RL Load/new-img/ac.png"},{"revision":"a248c2a5c6336c7229cd8d51a3172134","url":"simulation/1 PHASE HW RL Load/new-img/acnew.png"},{"revision":"01d20b9499a37288ab7e6d4082709264","url":"simulation/1 PHASE HW RL Load/new-img/acsourceuse.png"},{"revision":"3d47b78c09e27e217826c71dfa10006d","url":"simulation/1 PHASE HW RL Load/new-img/ammeter.png"},{"revision":"3fc5832af8c967d93049443af274298b","url":"simulation/1 PHASE HW RL Load/new-img/capacitor.png"},{"revision":"f382296f807bac07eec9be2a28ba7791","url":"simulation/1 PHASE HW RL Load/new-img/capacitoruse.png"},{"revision":"0d151bb6e84c06a9f4cde6e684e08948","url":"simulation/1 PHASE HW RL Load/new-img/dcsource.png"},{"revision":"d7fa6c9bb08cc9f0b5e69ce97ecadcf1","url":"simulation/1 PHASE HW RL Load/new-img/dcsourceuse.png"},{"revision":"6cd599df4c098769b0b721a0b88065df","url":"simulation/1 PHASE HW RL Load/new-img/gatepulse.jpg"},{"revision":"ce746f1225c7008f03e82388a734eda0","url":"simulation/1 PHASE HW RL Load/new-img/gatepulse.png"},{"revision":"5e2bb214ba1935bf9aff028b669a80ee","url":"simulation/1 PHASE HW RL Load/new-img/gatepulsenew.png"},{"revision":"02f710571e8e5415bad37ebd94e96e38","url":"simulation/1 PHASE HW RL Load/new-img/grid2.png"},{"revision":"14dd6c1fe87c360e4cdc8d38d6d5f307","url":"simulation/1 PHASE HW RL Load/new-img/ground.png"},{"revision":"97d95414be734830c923f8ac9123df09","url":"simulation/1 PHASE HW RL Load/new-img/inductor.png"},{"revision":"42ff40bb316eddb77807412f6ad7d7ba","url":"simulation/1 PHASE HW RL Load/new-img/inductoruse.png"},{"revision":"6481e91ea541998c348dfaf1ac0238ce","url":"simulation/1 PHASE HW RL Load/new-img/mosfetn - Copy.png"},{"revision":"6c0c3c702185f65cefad9b21a016210d","url":"simulation/1 PHASE HW RL Load/new-img/mosfetn.png"},{"revision":"03e752da1b6d27ebb259a2deef01a418","url":"simulation/1 PHASE HW RL Load/new-img/notuse - Copy.png"},{"revision":"d83c476e76dae315f8ad57aa00133c66","url":"simulation/1 PHASE HW RL Load/new-img/notuse.png"},{"revision":"536e356e0463574d371599dd9ccac3e8","url":"simulation/1 PHASE HW RL Load/new-img/opamp.png"},{"revision":"12082f0d0803c437c2f58f85a36a4fe7","url":"simulation/1 PHASE HW RL Load/new-img/opampn.png"},{"revision":"bf5a82042d9b67ac733ef2d92a705746","url":"simulation/1 PHASE HW RL Load/new-img/resistor.png"},{"revision":"a338a3f0a7eeb58392e86105475ef863","url":"simulation/1 PHASE HW RL Load/new-img/resistoruse.png"},{"revision":"7611bdc76761d76e2840fa9d96f54d3e","url":"simulation/1 PHASE HW RL Load/new-img/switchuse - Copy.png"},{"revision":"b457d4331be35963851c860c485e261c","url":"simulation/1 PHASE HW RL Load/new-img/switchuse.png"},{"revision":"7c3e05eefb65b81ee9d0f1b41c634776","url":"simulation/1 PHASE HW RL Load/new-img/thyristor.png"},{"revision":"7a5700e175c1df78bc56f69a6bb4d558","url":"simulation/1 PHASE HW RL Load/new-img/tri.png"},{"revision":"cc1c5e997b699dc3f738f2e4c8b2f280","url":"simulation/1 PHASE HW RL Load/new-img/triwave.png"},{"revision":"35eda927115ca5d107c8ebd464908999","url":"simulation/1 PHASE HW RL Load/new-img/Untitled.png"},{"revision":"2d1f76d87c9e069950c353eede04099a","url":"simulation/1 PHASE HW RL Load/new-img/vmeter.png"},{"revision":"0245ddcd66bc3d9b4a64658630f6daeb","url":"simulation/1 PHASE HW RL Load/new-img/vmeteruse.png"},{"revision":"c026b7795c651cc6d3433446fc40684c","url":"simulation/1 PHASE HW RLE Load/1 PHASE HW RLE Load.html"},{"revision":"c7ea774f10986445909b269f778eec26","url":"simulation/1 PHASE HW RLE Load/css/new-style.css"},{"revision":"3557b6baa5822ce6fe3ab7ce7ee5600d","url":"simulation/1 PHASE HW RLE Load/css/popup.css"},{"revision":"5022798fad43c609667947d3a8e10b33","url":"simulation/1 PHASE HW RLE Load/css/style.css"},{"revision":"4a394ee5248b0b8979f756370c0ba490","url":"simulation/1 PHASE HW RLE Load/js/graph.js"},{"revision":"9b5aff866a71fd93438600e9d6f08796","url":"simulation/1 PHASE HW RLE Load/js/popup.js"},{"revision":"baed60af835df01cd176479c06ad2f27","url":"simulation/1 PHASE HW RLE Load/js/script.js"},{"revision":"9a539e10404f65529425e2988c4b7321","url":"simulation/1 PHASE HW RLE Load/new-img/404-error.png"},{"revision":"b5c6635804d4f6488812be9b90c82037","url":"simulation/1 PHASE HW RLE Load/new-img/404-tick.png"},{"revision":"0dcc5a14e004bb4716186c477bc90651","url":"simulation/1 PHASE HW RLE Load/new-img/404-warning.png"},{"revision":"7e6e65385c31bb14eb0b3b2ced3d3b14","url":"simulation/1 PHASE HW RLE Load/new-img/ac.png"},{"revision":"a248c2a5c6336c7229cd8d51a3172134","url":"simulation/1 PHASE HW RLE Load/new-img/acnew.png"},{"revision":"01d20b9499a37288ab7e6d4082709264","url":"simulation/1 PHASE HW RLE Load/new-img/acsourceuse.png"},{"revision":"3d47b78c09e27e217826c71dfa10006d","url":"simulation/1 PHASE HW RLE Load/new-img/ammeter.png"},{"revision":"3fc5832af8c967d93049443af274298b","url":"simulation/1 PHASE HW RLE Load/new-img/capacitor.png"},{"revision":"f382296f807bac07eec9be2a28ba7791","url":"simulation/1 PHASE HW RLE Load/new-img/capacitoruse.png"},{"revision":"0d151bb6e84c06a9f4cde6e684e08948","url":"simulation/1 PHASE HW RLE Load/new-img/dcsource.png"},{"revision":"d7fa6c9bb08cc9f0b5e69ce97ecadcf1","url":"simulation/1 PHASE HW RLE Load/new-img/dcsourceuse.png"},{"revision":"6cd599df4c098769b0b721a0b88065df","url":"simulation/1 PHASE HW RLE Load/new-img/gatepulse.jpg"},{"revision":"ce746f1225c7008f03e82388a734eda0","url":"simulation/1 PHASE HW RLE Load/new-img/gatepulse.png"},{"revision":"5e2bb214ba1935bf9aff028b669a80ee","url":"simulation/1 PHASE HW RLE Load/new-img/gatepulsenew.png"},{"revision":"02f710571e8e5415bad37ebd94e96e38","url":"simulation/1 PHASE HW RLE Load/new-img/grid2.png"},{"revision":"14dd6c1fe87c360e4cdc8d38d6d5f307","url":"simulation/1 PHASE HW RLE Load/new-img/ground.png"},{"revision":"97d95414be734830c923f8ac9123df09","url":"simulation/1 PHASE HW RLE Load/new-img/inductor.png"},{"revision":"42ff40bb316eddb77807412f6ad7d7ba","url":"simulation/1 PHASE HW RLE Load/new-img/inductoruse.png"},{"revision":"6481e91ea541998c348dfaf1ac0238ce","url":"simulation/1 PHASE HW RLE Load/new-img/mosfetn - Copy.png"},{"revision":"6c0c3c702185f65cefad9b21a016210d","url":"simulation/1 PHASE HW RLE Load/new-img/mosfetn.png"},{"revision":"03e752da1b6d27ebb259a2deef01a418","url":"simulation/1 PHASE HW RLE Load/new-img/notuse - Copy.png"},{"revision":"d83c476e76dae315f8ad57aa00133c66","url":"simulation/1 PHASE HW RLE Load/new-img/notuse.png"},{"revision":"536e356e0463574d371599dd9ccac3e8","url":"simulation/1 PHASE HW RLE Load/new-img/opamp.png"},{"revision":"12082f0d0803c437c2f58f85a36a4fe7","url":"simulation/1 PHASE HW RLE Load/new-img/opampn.png"},{"revision":"bf5a82042d9b67ac733ef2d92a705746","url":"simulation/1 PHASE HW RLE Load/new-img/resistor.png"},{"revision":"a338a3f0a7eeb58392e86105475ef863","url":"simulation/1 PHASE HW RLE Load/new-img/resistoruse.png"},{"revision":"7611bdc76761d76e2840fa9d96f54d3e","url":"simulation/1 PHASE HW RLE Load/new-img/switchuse - Copy.png"},{"revision":"b457d4331be35963851c860c485e261c","url":"simulation/1 PHASE HW RLE Load/new-img/switchuse.png"},{"revision":"7c3e05eefb65b81ee9d0f1b41c634776","url":"simulation/1 PHASE HW RLE Load/new-img/thyristor.png"},{"revision":"7a5700e175c1df78bc56f69a6bb4d558","url":"simulation/1 PHASE HW RLE Load/new-img/tri.png"},{"revision":"cc1c5e997b699dc3f738f2e4c8b2f280","url":"simulation/1 PHASE HW RLE Load/new-img/triwave.png"},{"revision":"35eda927115ca5d107c8ebd464908999","url":"simulation/1 PHASE HW RLE Load/new-img/Untitled.png"},{"revision":"2d1f76d87c9e069950c353eede04099a","url":"simulation/1 PHASE HW RLE Load/new-img/vmeter.png"},{"revision":"0245ddcd66bc3d9b4a64658630f6daeb","url":"simulation/1 PHASE HW RLE Load/new-img/vmeteruse.png"},{"revision":"34e710c8f01314fa4efb36e0d09db47f","url":"simulation/index.html"},{"revision":"afbfd384b12c333694f147c4349ba9e1","url":"theory.html"},{"revision":"0494e9f0c51cd07f6a535261ff64c856","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );