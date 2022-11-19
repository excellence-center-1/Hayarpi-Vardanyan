#include<iostream>
using namespace std;
void inputArray(int arr[],int n){
	for(int i=0;i<n;i++)
	{cout<<"arr["<<i<<"]=";
		cin>>arr[i];
	}
}

void printArray(int arr[],int n){
	for(int i=0;i<n;i++)
	cout<<arr[i]<<"  ";
}

void swap(int* a,int* b){
	int temp=*a;
	*a=*b;
	*b=temp;
	}

int part(int arr[],int l,int h){
	int p=arr[h];
	int i=(l-1);
	for(int j=l;j<=h-1;j++)
	{
		if(arr[j]<p)
		{
			i=i+1;
			swap(&arr[i],&arr[j]);
		}
	}
	swap(&arr[i+1],&arr[h]);
	return i+1;
}
void  quickSort(int arr[],int l,int h){
	if(l<h)
	{
		int pp=part(arr,l,h);
		quickSort(arr,l,pp-1);
		quickSort(arr,pp+1,h);
	}
}

int main()
{       const int n=7;
	int arr[n];
	inputArray(arr,n);
	cout<<endl;
	quickSort(arr,0,n-1);
	printArray(arr,n);
	cout<<endl;
	return 0;
}
