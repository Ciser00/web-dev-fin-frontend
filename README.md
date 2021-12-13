router.get("/", (req, res) => {
  const creepyPosts = firestore.getDocs(firestore.collection(db, "creepyPosts"));
  const creepyPostsArray = [];
  creepyPosts
    .then((response) => {
      response.forEach((doc) =>{
        const docData = doc.data();
        docData.id = doc.id
        //push document into array every time the query loops over
        creepyPostsArray.push(docData);
      });
      return res.send(creepyPostsArray);
    })
    .catch(function(error){
      console.log("Error:", error);
      return res.send(error);
    });
});
