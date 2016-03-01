public class Hello {
  public static void main(String [] args) {
    System.out.println("Hello Java");
    // in the terminal, type java Hello Hellllooooooooo  --- > result Hellllooooooooo
    System.out.println(args[0]);
    // type java Hello Hellllooooooooo Banjo ----> result Hellllooooooooo Banjo
    System.out.println(args[0] + " " + args[1]);
    System.out.println(1 + 1);
    System.out.println("Hello" + 1);

  }
}
