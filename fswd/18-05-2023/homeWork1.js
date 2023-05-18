// Create an instance of Rectangle
const Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Display the area and perimeter
  get getArea() {
    return this.height * this.width;
  }
  get getPerimeter(){
    return 2*this.height+2*this.width;
  }

  // Update the width and height using the setter methods
   set Height(newHeight) {
       if(newHeight>=0){
         this.height = newHeight;
       } else {
           console.log('Invalid width  value. Width must be a positive number. ');
       }
   }
     set Width(newWidth){
       if(newWidth>=0){
           this.width=newWidth; 
       } else {
           console.log('Invalid width  value. Width must be a positive number. ');
       }
  }   
}
const rectangle = new Rectangle(5, 10);
console.log('Area:' , rectangle.getArea);
console.log('Perimeter:', rectangle.getPerimeter); 
rectangle.width = 8;
rectangle.height = 15;
//rectangle.set(8, 15);

// Display the updated area and perimeter
console.log('Updated Area:' , rectangle.getArea);
console.log('Updated Perimeter:', rectangle.getPerimeter); 

// Try setting invalid values
rectangle.width = -2;
rectangle.height = 0;
console.log('Area:' , rectangle.getArea);
console.log('Perimeter:', rectangle.getPerimeter); 
