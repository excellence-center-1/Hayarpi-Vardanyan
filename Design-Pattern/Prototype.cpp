#include <iostream>
#include <unordered_map>
#include <memory>

class Shape {
public:
    virtual ~Shape() = default;
    virtual std::unique_ptr<Shape> clone() const = 0;
    virtual void draw() const = 0;
};

class Circle : public Shape {
public:
    std::unique_ptr<Shape> clone() const override {
        return std::make_unique<Circle>(*this);
    }

    void draw() const override {
        std::cout << "Drawing Circle\n";
    }
};

class Square : public Shape {
public:
    std::unique_ptr<Shape> clone() const override {
        return std::make_unique<Square>(*this);
    }

    void draw() const override {
        std::cout << "Drawing Square\n";
    }
};

class Triangle : public Shape {
public:
    std::unique_ptr<Shape> clone() const override {
        return std::make_unique<Triangle>(*this);
    }

    void draw() const override {
        std::cout << "Drawing Triangle\n";
    }
};

class ShapeFactory {
private:
    std::unordered_map<std::string, std::unique_ptr<Shape>> prototypes;

public:
    ShapeFactory() {
        prototypes["Circle"] = std::make_unique<Circle>();
        prototypes["Square"] = std::make_unique<Square>();
        prototypes["Triangle"] = std::make_unique<Triangle>();
    }

    std::unique_ptr<Shape> createShape(const std::string& type) const {
        auto it = prototypes.find(type);
        if (it != prototypes.end()) {
            return it->second->clone();
        }
        return nullptr;
    }
};

int main() {
    ShapeFactory shapeFactory;

    // Test cases
    std::unique_ptr<Shape> circle = shapeFactory.createShape("Circle");
    if (circle) circle->draw();

    std::unique_ptr<Shape> square = shapeFactory.createShape("Square");
    if (square) square->draw();

    std::unique_ptr<Shape> triangle = shapeFactory.createShape("Triangle");
    if (triangle) triangle->draw();

    std::unique_ptr<Shape> unknownShape = shapeFactory.createShape("Rectangle");
    if (!unknownShape) {
        std::cout << "Unknown shape requested\n";
    }

    return 0;
}
