#include<iostream>
using namespace std;
void inputArray(int arr[],int n);
void printArray(int arr[],int n);
void  shellSort(int arr[],int n);

void inputArray(int arr[],int n){
	for(int i=0;i<n;i++)
	{
		cout<<"arr["<<i<<"]=";
		cin>>arr[i];
	}
}

void printArray(int arr[],int n){
	for(int i=0;i<n;i++)
		cout<<arr[i]<<"  ";
}

void shellSort(int arr[],int n){
	for(int i=n/2;i>0;i/=2)
	{for(int j=i;j<n;j++)
	{
	int temp=arr[j];
	int k;
	for( k=j;k>=i && arr[k-i]>temp;k-=i){
	arr[k]=arr[k-i];
	}
	arr[k]=temp;
	}
}
}

int main()
{
	const int n=5;
	int arr[n];
	inputArray(arr,n);
	cout<<endl;
	cout<<"Sorted array is:  "<<endl;
	shellSort(arr,n);
	cout<<endl;
	printArray(arr,n);
	cout<<endl;
	return 0;
}
