package galvanize;

class Rectangle{
  private double w;
  private double h;
  private String c;

  Rectangle(){
    this.w = 1;
    this.h = 1;
    this.c = "blue";
  }

  public void setWidth(double n){
    this.w = n;
  }
  public double getWidth(){
    return this.w;
  }
}

public class Inheritance{
  public static void main(String [] args){
    System.out.println("Hello World");

    Rectangle r = new Rectangle();
    System.out.println(r.getWidth());
    r.setWidth(2.56678);
    System.out.println(r.getWidth());
  }
}
