public class Ops{
  public static int sum(int x, int y){
    return x + y;
  }
  public static int multiply(int x, int y, int z){
    return x * y * z;
  }
  public static int divide(int x, int y){
    return x / y;
  }
  public static float divideFloat(float x, float y){
    return x / y;
  }
  public static int mod(int x, int y){
    return x % y;
  }
  public static void main(String [] args){
    System.out.println( sum(1,2) );
    System.out.println( multiply(5,2,2) );
    System.out.println( divide(1,2) );
    System.out.println( divideFloat(1,2) );
    System.out.println( mod(1,2) );
  }
}
