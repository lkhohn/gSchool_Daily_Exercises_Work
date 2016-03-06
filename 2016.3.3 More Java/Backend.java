public class Backend implements API {

  public String[] getUsers(){
    String [] returnArray = {"Bob", "Joe", "Jimmy James"};
    return returnArray;
  }
  public String getUser(int id){
    if(id == 1){
      return "Bob";
    } else {
      return "Joe";
    }
  };
  public String createUser(String user){
    return "User created";
  };

}
