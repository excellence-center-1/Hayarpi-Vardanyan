#include<iostream>
#include<queue>
using namespace std;
int main()
{
	queue<int> myqueue;
	myqueue.push(0);
	myqueue.push(10);
	myqueue.push(15);

	while(!myqueue.empty())
	{
		cout<<"  "<<myqueue.front();
		myqueue.pop();}
	cout<<endl;
	return 0;
}
