async function getData(uId) {
    try {
      const response = await fetch(`exampleapi`);
      const email = await response.text();
      console.log("Fetched the data!");
      return email;
    } catch (error) {
      throw error;
    }
  }
  
  console.log("start");
  
  (async function () {
    try {
      const email = await getData("uid");
      console.log("Email id of the user id is: " + email);
      console.log("end");
    } catch (error) {
      console.error(error);
    }
  })();
  