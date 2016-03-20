public static Palindrome {
public static void main  (String args[]) {
  String str = "bob";
  return str.equals(new StringBuilder(str).reverse().toString());
  }
}
