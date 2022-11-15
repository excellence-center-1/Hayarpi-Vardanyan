//#include<iostream>
#include<bits/stdc++.h>
using namespace std;
class Queue{
	public:
		stack<int> s;
	void  enQueue(int x){
		s.push(x);
	}
	int deQueue(){
		if(s.empty()){
			cout<<"Q is empty";
			return 0;
		}
		int x=s.top();
		s.pop();
		if(s.empty())
			return x;
		int item=deQueue();
		s.push(x);
		return item;
	}
};

int main()
{
	Queue q;
	q.enQueue(5);
	q.enQueue(10);
	q.enQueue(14);
	q.enQueue(25);
	q.enQueue(50);

	cout<<q.deQueue()<<endl; 
	cout<<q.deQueue()<<endl;
        cout<<q.deQueue()<<endl;
        cout<<q.deQueue()<<endl;
        cout<<q.deQueue()<<endl;
      	
	return 0;
}
