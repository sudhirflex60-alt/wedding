// ===== EDIT WEDDING DETAILS HERE =====
const WEDDING={
 names:{groom:'Pranay',bride:'Priyanka'},
 date:new Date('2027-02-18T06:00:00+05:30'), // Asia/Kolkata
 phone:'8790876174',lat:19.052856,lng:79.401501,
 formEndpoint:'', // paste a Formspree URL (https://formspree.io/f/xxxx) to store RSVPs. Empty = WhatsApp fallback.
 groom:[['father','Rajukumar'],['mother','Varalakshmi'],['brother','Varshith'],['sister','Sindhu'],['grandmother','Sathamma'],['grandfather','Venkaaiaha']],
 bride:[['father','Rakesh Sharma'],['mother','Sarita'],['brother','Ankit'],['sister','Neha']],
 late:['Lachanna and Possava','Emabdi Mallaiaha and Shenkaravva'],
 gallery:[{src:'assets/images/couple-1.jpg',cap:'Pranay & Priyanka'},{src:'assets/images/couple-2.jpg',cap:'Pranay & Priyanka'},{src:'assets/images/couple-3.jpg',cap:'Pranay & Priyanka'},{src:'assets/images/couple-4.jpg',cap:'Pranay & Priyanka'},{src:'assets/images/couple-5.jpg',cap:'Pranay & Priyanka'},{src:'assets/images/pranay-1.jpg',cap:'Pranay'},{src:'assets/images/pranay-2.jpg',cap:'Pranay'},{src:'assets/images/pranay-3.jpg',cap:'Pranay'},{src:'assets/images/priyanka-1.jpg',cap:'Priyanka'},{src:'assets/images/priyanka-2.jpg',cap:'Priyanka'},{src:'assets/images/priyanka-3.jpg',cap:'Priyanka'},{src:'assets/images/priyanka-4.jpg',cap:'Priyanka'}], // add: {src:'assets/images/couple1.jpg',cap:'Couple'}
 // Game 1: PLACEHOLDER questions - replace with real facts about the couple. 'a' = index of correct option.
 quiz:[{q:'EDIT ME: Where did Pranay and Priyanka first meet?',o:['Option A','Option B','Option C'],a:0},
  {q:'EDIT ME: Pranay\'s favourite food?',o:['Option A','Option B','Option C'],a:1},
  {q:'EDIT ME: Priyanka\'s favourite place?',o:['Option A','Option B','Option C'],a:2}],
 likely:[{en:'Who is more likely to cry at the wedding?',te:'పెళ్లిలో ఎవరు ఎక్కువగా ఏడుస్తారు?',hi:'शादी में कौन ज़्यादा रोएगा?'},
  {en:'Who is more likely to be late?',te:'ఎవరు ఎక్కువగా ఆలస్యం చేస్తారు?',hi:'कौन ज़्यादा देर करेगा?'},
  {en:'Who is more likely to plan a surprise?',te:'ఎవరు సర్ప్రైజ్ ప్లాన్ చేస్తారు?',hi:'सरप्राइज़ कौन प्लान करेगा?'},
  {en:'Who is the better cook?',te:'ఎవరు బాగా వండుతారు?',hi:'बेहतर खाना कौन बनाता है?'}]
};
