public class Calculator {

   public static void main(String[] args) {
       int n = 7;
       int result = 1;
       for (int i = 1; i <= n; i++) {
           result = result * i;
       }
       System.out.println("The factorial of 7 is " + result);
   }
}
