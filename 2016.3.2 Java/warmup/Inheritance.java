package galvanize;
//
// class Rectangle{
//   private double w;
//   private double h;
//   private String c;
//
//   Rectangle(){
//     this.w = 1;
//     this.h = 1;
//     this.c = "blue";
//   }
//
// Rectangle(double width, double height, String color){
//   this.w = width;
//   this.h = height;
//   this.c = color;
// }
//
//   public void setWidth(double n){
//     this.w = n;
//   }
//   public double getWidth(){
//     return this.w;
//   }
// }
//
// public class Inheritance{
//   public static void main(String [] args){
//     System.out.println("Hello World");
//
//     Rectangle r = new Rectangle();
//     System.out.println(r.getWidth());
//     r.setWidth(2.56678);
//     System.out.println(r.getWidth());
//
//     System.out.println("-----------------");
//     Rectangle or = new Rectangle(2.1, 3.4, "white");
//     System.out.println(or.getWidth());
//   }
// }



class Vehicle{
  public void startEngine(){
    System.out.println("Starting Engine");
  }
}

class Car extends Vehicle{
  private int speed;
  Car(int s){
    this.speed = s;
  }
  public int getSpeed(){
    return this.speed;
  }
}

class Boat extends Vehicle{
  private int speed;
  Boat(int s){
    this.speed = s;
  }
  public int getSpeed(){
    return this.speed;
  }
}

class Plane extends Vehicle{
  private int speed;
  Plane(int s){
    this.speed = s;
  }
  public void startEngine(){
    System.out.println("Starting Plane Engine");
  }
}

public class Inheritance{
  public static void main(String [] args){
    Car c = new Car(45);
    Boat b = new Boat(120);
    Plane p = new Plane(500);
    c.startEngine();
    b.startEngine();
    p.startEngine();
  }
}
