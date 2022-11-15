#include<iostream>
using namespace std;
const int n=7;
void inputArray(int arr[],int n){
	for(int i=0 ;i<n;i++)
        {
                cout<<"arr["<<i<<"]=";
                cin>>arr[i];
        }
}
void printArray(int arr[],int n)
{
	for(int i=0;i<n;i++)
		cout<<arr[i]<<"  ";
}
void merge(int arr[],int const left,int const mid,int const right){

auto const arr1=mid-left+1;
auto const arr2=right-mid;

	auto *leftArray=new int[arr1];
        auto *rightArray=new int[arr2];
for(auto i=0;i<arr1;i++)
	leftArray[i]=arr[left+i];
for(auto j=0;j<arr2;j++)
	rightArray[j]=arr[mid+1+j];
auto indexArr1=0,indexArr2=0;
int indexMergedArray=left;

while(indexArr1<arr1 && indexArr2<arr2)
{
 if(leftArray[indexArr1]<=rightArray[indexArr2])
 {
	 arr[indexMergedArray]=leftArray[indexArr1];
	 indexArr1++;
}
else
{
	arr[indexMergedArray]=rightArray[indexArr2];
	indexArr2++;
}
indexMergedArray++;
}
while(indexArr1<arr1)
{
arr[indexMergedArray]=leftArray[indexArr1];
indexArr1++;
indexMergedArray++;
}

while(indexArr2<arr2)
{
arr[indexMergedArray]=rightArray[indexArr2];
indexArr2++;
indexMergedArray++;
}
delete[] leftArray;
delete[] rightArray;
}
void mergeSort(int arr[],int const begin,int const end){
	if(begin>=end)
		return;  //recursiv
auto mid=begin+(end-begin)/2;
mergeSort(arr,begin,mid);
mergeSort(arr,mid+1,end);
merge(arr,begin,mid,end);
}

int main()
{
	int arr[n];
	inputArray(arr,n);
	cout<<endl;
	mergeSort(arr,0,n-1);
	cout<<"\nSorted array is\n";
	printArray(arr,n);
	return 0;

}
