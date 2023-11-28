#include <iostream>

class WritingStyle {
public:
    virtual void applyStyle() const = 0;
    virtual ~WritingStyle() {}
};

class FormalStyle : public WritingStyle {
public:
    void applyStyle() const override {
        std::cout << "Applying formal writing style." << std::endl;
    }
};

class InformalStyle : public WritingStyle {
public:
    void applyStyle() const override {
        std::cout << "Applying informal writing style." << std::endl;
    }
};


class Author {
protected:
    WritingStyle* writingStyle;

public:
    Author(WritingStyle* style) : writingStyle(style) {}

    virtual void write() const = 0;
    virtual ~Author() {}
};

class AcademicAuthor : public Author {
public:
    AcademicAuthor(WritingStyle* style) : Author(style) {}

    void write() const override {
        std::cout << "Writing academic work. ";
        writingStyle->applyStyle();
    }
};

class JournalistAuthor : public Author {
public:
    JournalistAuthor(WritingStyle* style) : Author(style) {}

    void write() const override {
        std::cout << "Writing journalistic work. ";
        writingStyle->applyStyle();
    }
};

class NovelistAuthor : public Author {
public:
    NovelistAuthor(WritingStyle* style) : Author(style) {}

    void write() const override {
        std::cout << "Writing novel. ";
        writingStyle->applyStyle();
    }
};

int main() {
    WritingStyle* formalStyle = new FormalStyle();
    WritingStyle* informalStyle = new InformalStyle();

    Author* academicAuthor = new AcademicAuthor(formalStyle);
    Author* journalistAuthor = new JournalistAuthor(informalStyle);
    Author* novelistAuthor = new NovelistAuthor(formalStyle);

    academicAuthor->write();
    journalistAuthor->write();
    novelistAuthor->write();

    delete academicAuthor;
    delete journalistAuthor;
    delete novelistAuthor;

    delete formalStyle;
    delete informalStyle;

    return 0;
}



