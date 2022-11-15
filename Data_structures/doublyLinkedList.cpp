#include<iostream>
using namespace std;
class Node{
	public:
	int data;
	Node* prev;
	Node* next;

	void push(Node** head_ref,int new_data);
        void insertAfter(Node* prev_node,int new_data);
        void insertEnd(Node** head_ref,int new_data);
        void printList(Node* node);
        void deleteNode(Node** head_ref,Node* del);
        void deleteNodeAtGivenPos(class Node**  head_ref,int n);
        int getCount(Node* heaad);
          };

       //	Add a node at the front
void push(Node** head_ref,int new_data){
	Node* new_node=new Node;
	new_node->data=new_data;
        new_node->next=(*head_ref);
	new_node->prev=NULL;
	if((*head_ref)!=NULL)
		(*head_ref)->prev=new_node;
	(*head_ref)=new_node;
            }

// Add a node after a given node
void insertAfter(Node* prev_node,int new_data)
{
	if(prev_node==NULL){
		cout<<"the given previus node cannot be NULL";
		return ;
	}
	Node* new_node=new Node();
	new_node->data=new_data;
	new_node->next=prev_node->next;
	prev_node->next=new_node;
	new_node->prev=prev_node;
	if(new_node->next!=NULL)
		new_node->next->prev=new_node;
}

//Add node and the end
 void insertEnd(Node** head_ref,int new_data)
{
	Node* new_node=new Node();
	Node* last=*head_ref;
	new_node->data=new_data;
	new_node->next=NULL;
	if(*head_ref==NULL){
		new_node->prev=NULL;
		*head_ref=new_node;
		return;
	}
	while (last->next!=NULL)
		last=last->next;
	last->next=new_node;
	new_node->prev=last;
	return ;
}

void deleteNode(Node** head_ref,Node* del){
	if(*head_ref==NULL || del==NULL)
		return;
	if(*head_ref==del)
		*head_ref=del->next;
	if(del->next!=NULL)
		del->next->prev=del->prev;
	if(del->prev!=NULL)
		del->prev->next=del->next;

	return;
}

void deleteNodeAtGivenPos(class Node**  head_ref,int n){
	if(*head_ref==NULL || n<=0)
		return;
	class Node* current=*head_ref;
	int i;
	for(int i=1;current!=NULL &&i<n;i++)
		current=current->next;
	if(current==NULL)
		return;
	deleteNode(head_ref,current);
}

int getCount(Node* head){
                int count=0;
                Node* current=head;
                while(current!=NULL){
                 count++;
		 current=current->next;
		}
		return count;
}
void printList(Node* node)
{
	Node* last;
	while(node!=NULL){
		cout<<"  "<<node->data<<"  ";
		last=node;
		node=node->next;
	}
	cout<<endl;
	while (last!=NULL){
		cout<<"  "<<last->data<<"  ";
		last=last->prev;
	}
}

int main()
{
	Node* head=NULL;
//	insertEnd(&head,6);
	push(&head,7);
	push(&head,1);
	push(&head,2);
	push(&head,5);
	push(&head,10);
	insertEnd(&head,4);
	insertAfter(head->next,8);
	printList(head);
	cout<<endl;
       //DELETE
	cout<<"\nLinked list after del:\n";
	deleteNode(&head,head);//delete first node
	deleteNode(&head,head->next);//delete middle node
	deleteNode(&head,head->next);//delete last node
	printList(head);
	
	int n=3;
	deleteNodeAtGivenPos(&head,n);
	cout<<"\nDoubly linked list is:  \n";
	printList(head);
         
        //getCount
	cout<<"\ncount of nodes is:  "<<getCount(head)<<endl;	


	return 0;
}


