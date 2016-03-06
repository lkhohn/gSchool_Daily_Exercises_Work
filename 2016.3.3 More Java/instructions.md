# Electronic Life: Java Edition
​
## Project Goals
​
- Use Inheritance
- Use polymorphism
  - overloading
  - overriding
- Use Encapsulation / abstraction
  - make everything private that you can
  - if you cant make it private make it protected
  - otherwise, only if it has to be, make it public
  - use getters where needed
  - use setters where needed
​
## Create the following
​
### Entity class
​
- Is an abstract class
- Has a field named size of type String
  - String "large" or "small" as possible values.
  - Bonus: enum for size field.
- Has a field named isDead of type boolean.
- Has a field named isSleeping of type boolean.
- Has a field named weight of type int.
- Has a method eat.
  - Has one parameter of type Entity
  - Increases weight by 1/10th weight of eaten entity.
  - Eaten entity dies.
- Has a method sleep.
  - Sets isSleeping to true;
- Has a method poop.
  - Decreases weight by 1/10th.
  - If weight is zero Entity dies.
- Has a method act.
  - Takes in Entity (pass in null if no Entity or override);
  - Does nothing if isDead.
  - Does nothing if isSleeping.
  - If isSleeping it has of 50% chance of setting isSleeping to true.
  - Logic can decide whether to eat(Entity), sleep() or poop();
- Has a method die.
  - set isDead to true.
​
### Cat class
​
- Is abstract.
- Subclasses Entity.
​
### Dog class
​
- Is abstract.
- Subclasses Entity.
​
### Fish class
​
- Is abstract.
- Subclasses Entity.
​
### Rottweiler class
​
- Subclasses dog
- Size is set to "large"
- Only eats the following:
  - Small cats.
  - Small fish.
​
### Weiner class
​
- Subclasses Dog
- Size is set to "small"
- Only eats the following:
  - Small fish.
  - String "dogfood".
    - "Dogfood" adds 2 to weight.
​
### Persian class
​
- Subclasses cat
- Size is set to "small"
- Only eats the following:
  - Small fish.
  - String "Catfood".
- Has method called annoy
  - returns void.
  - Has parameter of type Entity.
  - The passed in entity loses one weight.
​
### Lion class
​
- Subclasses cat
- Size is set to "Large"
  - Eats anything besides a Lion.
  - Is 3x more likely to sleep than anything other action.
​
### Goldfish class
​
- Subclasses Fish
- Size is set to "Small"
- Only eats the following:
  - String "Fishfood"
    - Increases weight by 2.
  - String "Trash"
    - Has a 50% chance of increasing weight by 2 or decreasing weight by 2.
- Is 3x as likely to poop than sleep
- Is 3x as likely to eat than sleep.
​
# Piranha class
​
- Subclasses Fish
- Size is set to "Large"
- Eats everything besides piranhas
- If an entity is passed into act it will eat it unless it is another Piranha
