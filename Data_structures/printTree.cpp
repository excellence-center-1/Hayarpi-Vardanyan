#include <iostream>
using namespace std;
#define COUNT 10
class Node {
public:
    int data;
    Node *left, *right;
    Node(int data)
    {
        this->data = data;
        this->left = NULL;
        this->right = NULL;
    }
};
 
// Function to print binary tree 
void print(Node* root, int space)
{
    if (root == NULL)
        return;
    space += COUNT;
    print(root->right, space);
   cout << endl;
    for (int i = COUNT; i < space; i++)
        cout << " ";
    cout << root->data << "\n";
 
   
    print(root->left, space);
}
 

void printt(Node* root)
{
   
    print(root, 0);
}
 
int main()
{
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
 
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->left = new Node(6);
    root->right->right = new Node(7);
 
    root->left->left->left = new Node(8);
    root->left->left->right = new Node(9);
    root->left->right->left = new Node(10);
    root->left->right->right = new Node(11);
    root->right->left->left = new Node(12);
    root->right->left->right = new Node(13);
    root->right->right->left = new Node(14);
    root->right->right->right = new Node(15);
 
    printt(root);
 
    return 0;
}
