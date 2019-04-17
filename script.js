$(".button").click(function() {
var question1 = $(".answer1").val();
var question1 = $(".answer1").val();
var question2 = $(".answer2").val();
var question2 = $(".answer2").val();
        
        if ( question1 >=18 && question2 === "Male"||"male" ) {
            $(".answer").text ("You will be Luhan. He started his education at the Beijing Shida Middle School and later attended the Beijing Haidian Forein Language Shi Yan School. Thereafter, he attended Yonsei University in South Korea as an exchange student. Han majored in Applied Music from the Seoul Institute of Arts. Han’s first tryst in music was unsuccessful. In 2008, he auditioned for JYP entertainment at their global audition in China but failed to clear the trial. Two years later, while studying in Seoul, he was scouted by an S.M. Entertainment representative who suggested him to audition for the company. The audition went successfully as he was enrolled as a trainee under the agency.");
            $(".answer").append ("<br><img src='https://2.bp.blogspot.com/-b5W6b5Bc9fY/W29OW7voXNI/AAAAAAAADe4/YqlJBgqyBro54d4KAE2cVGNOAFVg3m9ygCLcBGAs/s1600/Luhan.jpg'>");
        
        }else if ( question1 <=18 && question2 === "Male"||"male") {
            $(".answer").text ("You will be Zhang Yi Xin. Yixing Zhang (also known as Lay) was born on October 7th, 1991. He is most famous for being one of the Main Dancers in the popular South Korean-Chinese band, EXO, and the Main Dancer in their sub-unit, EXO-M. Aside from singing and acting, he has further extended his activities to acting in few Chinese series, & now even playing a role in an English film with Jackie Chan, Kung Fu Yoga.");
            $(".answer").append ("<br><img src='https://www.billboard.com/files/media/Lay-Zhang-2018-billboard-1548.jpg'>");
        
        }else if (question1 >=18 && question2 === "Female"||"female") {
            $(".answer").text ("You will be Fan Bing Bing. Bingbing Fan was born 16 September 1981. She is a Chinese actress and television producer. Fan has participated in many foreign-language films, such as the French film Stretch, the Korean film My Way and the Hollywood blockbuster X-Men: Days of Future Past.");
            $(".answer").append ("<br><img src='https://3.bp.blogspot.com/-7dx2m8gTp4U/WRbdfZelCWI/AAAAAAAAADA/YykWebUW0PokPPHHcQTilD3NipawQfC4ACK4B/s1600/Fan%2BBingbing%2Bprofile%2Bfamily%252C%2Bwiki%2BAge%252C%2BAffairs%252C%2BBiodata%252C%2BHusband%252C%2BHeight%252C%2BWeight%252C%2BBiography%2Bgo%2Bprofile%2B2.jpg'>");
        
        }else if (question1 <=18 && question2 === "Female"||"female") {
            $(".answer").text ("You will be Guan Xiao Tong. First known as a child actor for her role in 2003's Nuan, she has since gone on to lead films like The Promise and The Left Ear. She has also scored television roles as well, starring in To Be A Better Man and Sweet Combat.");
            $(".answer").append ("<br><img src='https://i.pinimg.com/originals/8d/28/10/8d2810f9df4fe03da4789246a8ac1426.jpg'>");
        
}});
















