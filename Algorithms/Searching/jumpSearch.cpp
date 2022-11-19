#include<iostream>
#include<cmath>
using namespace std;
void inputArray(int arr[],int n){
	for(int i=0;i<n;i++)
	{cout<<"arr["<<i<<"]=";
		cin>>arr[i];
	}
}

void bubbleSort(int arr[],int n){
	int a;
	for(int i=0;i<n-1;i++)
	for(int j=i+1;j<n;j++)
	if(arr[i]>arr[j])
          {
	    a=arr[i];
	    arr[i]=arr[j];
	    arr[j]=a;
	  }
	for(int i=0;i<n;i++)
	cout<<arr[i]<<"  ";
}
int Min(int step,int n){
	if(step<=n)
	return step;
	else
	return n;
	}
int jumpSearch(int arr[],int n,int element){
	int i=0;
        int step=sqrt(n);
	while(arr[Min(step,n)-1]<element)
       
	{i=step;
	step+=sqrt(n);
         if(i>=n)
		 return -1;
	}
        while(arr[i]<element)
	{
		i++;
		if(i==Min(step,n))
		
	return -1;
	}
	if(arr[i]==element)
		return i;

return -1;
}
int main()
{
	const int n=9;
	int arr[n],element=10;
	inputArray(arr,n);
	cout<<"\n";
	bubbleSort(arr,n);
	cout<<"\n";
	int result=jumpSearch(arr,n,element);
	if(result==-1)
	cout<<"error\n";
	else 
	cout<<"index="<<result<<"\n";
	return 0;
	}
