public class Letters {
  public static void main(String [] args){
    String s = "penguins go waddle waddle hop hop";

    // this DOES NOT WORK
    int NewString newString = new NewString( s.length() );
    // int lenS = s.length();
    // System.out.println(lenS);
    String words[] = s.split("\\ ");
    // System.out.println(words);
    for (int i = 0; i < words.length; i++){
        if (i > 0){
          newString.append(" ");
        }
        newString.append(Character.toUpperCase(words[i].charAt(0))).append(words[i].substring(1));
    }
    System.out.println(newString);
  }
}
