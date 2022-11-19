#include<iostream>
using namespace std;
void inputArray(int arr[],int n){
        for (int i=0;i<n;i++)
        {
                cout<<"arr["<<i<<"]=";
                cin>>arr[i];
        }
}

void bubbleSort(int arr[],int n){
        int a;
        for(int i=0;i<n-1;i++)
         for(int j=i+1;j<n;j++)
           if( arr[i]>arr[j])
           {    a=arr[i];
                arr[i]=arr[j];
                arr[j]=a;

         }
         cout<<"Sorted array:  \n";
        for(int i=0;i<n;i++)
                cout<<arr[i]<<"   ";
}

int binarySearch(int arr[],int low,int high,int element){
            if(high>=low)
            {
        int mid=low+(high-low)/2;
        if(arr[mid]==element)
                return mid;
        if(arr[mid]>element)
                return binarySearch(arr,low,mid-1,element);
        else
             return binarySearch(arr,mid+1,high,element);
            }
            return -1;//elementi chlinelu depqum
  }
int Min(int a,int b){
	if(a>b)return a;
	else return b;
}
int exponentialSearch(int arr[],int n,int element){
	if(arr[0]==element)
		return 0;
	int i=1;
	while(i<n && arr[i]<=element)
		i=i*2;
		return binarySearch(arr,i/2,Min(i,n-1),element);
}
int main()
{
        const int n=10;
        int arr[n];
        int element=10;
        inputArray(arr,n);
        cout<<"\n";
        bubbleSort(arr,n);
        cout<<"\n";
	int result=exponentialSearch(arr,n,element);
	if(result==-1)
	cout<<"Error\n";
	else
		cout<<"index="<<result<<"\n";
	return 0;
}
