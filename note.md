dotnet new sln
dotnet new webapi -o API
dotnet sln add .\API\

(VsCode): Crtl + Shift + P -> Generate Assets for Build and Debug
dotnet run -> access api throught /swagger/index.html
dotnet dev-certs https -t

dotnet --info 
(check host on terminal, install in nuget gallery Microsoft.EntityFrameworkCore,
Microsoft.EntityFrameworkCore. Sqlite) 

(VsCode): settings -> csharpextensions: (prefix... -> _), (use this for ctor assignment -> not tick)

dotnet tool install --global dotnet-ef --version (version in host in terminal)

dotnet ef migrations add InitialCreate -o Data/Migrations -> error 
-> download Microsoft.EntityFrameworkCore.Design -> run again

dotnet ef database update
crtl p -> sqlite -> show database

cd .. -> dotnet new classlib -o Core -> dotnet new classlib -o Infrastructure 
-> dotnet sln add .\Core\ -> dotnet sln add .\Infrastructure\

cd API -> dotnet add reference ../Infrastructure
cd .. ->  cd .\Infrastructure\ -> dotnet add reference ../Core
cd .. -> dotnet restore
move   <ItemGroup>
    <PackageReference Include="Microsoft.EntityFrameworkCore" Version="8.0.8" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.Sqlite" Version="8.0.8" />
  </ItemGroup>
to infrastructure
dotnet restore
dotnet build -> to make sure everything run ok -> cd API -> dotnet watch run

------------------------------------------------------------------------------------------------

dotnet ef database drop -p .\Infrastructure\ -s .\API\
dotnet ef migrations remove -p Infrastructure -s API
dotnet ef migrations add InitialCreate -p Infrastructure -s API -o Data/Migrations

Config your own Property so run again
dotnet ef migrations remove -p Infrastructure -s API
dotnet ef migrations add InitialCreate -p Infrastructure -s API -o Data/Migrations

------------------------------------------------------------------------------------------------
npm i -g @angular/cli
ng new client -> yes , SCSS
test app => ng serve
ng add ngx-bootstrap
npm i bootstrap
add manually in angular.json in styles

Generate SSL key to run on https: https://medium.com/@rubenvermeulen/running-angular-cli-over-https-with-a-trusted-certificate-4a0d5f92747a
Run on wsl, change file .sh to LF instead CRLF

cd .\src\app\
ng g c nav-bar --skip-tests

------------------------------------------------------------------------------------------------
cd client
cd .\src\app\  
ng g m core
ng g m shop
cd shop
ng g c shop --flat --skip-tests
ng g s shop --skip-tests --flat
ng g m shop-routing --flat

ng g c shop-item --skip-tests
shared/components -> ng g c paging-header --skip-tests, ng g c pager --skip-tests

------------------------------------------------------------------------------------------------
app -> ng g m home -> cd home -> ng g c home --skip-tests --flat 
shop -> ng g c product-details --skip-tests

------------------------------------------------------------------------------------------------
core -> ng g c test-error
src -> ng g environments

core -> ng g c not-found ->  ng g c server-error
core -> new folder interceptors -> cd interceptors -> ng g interceptor error


------------------------------------------------------------------------------------------------
client -> npm i ngx-toastr

------------------------------------------------------------------------------------------------

core -> ng g c section-header --skip-tests
npm i xng-breadcrumb

------------------------------------------------------------------------------------------------
client -> npm i bootswatch
client -> npm i ngx-spinner

core -> mkdir services
services -> ng g s busy --flat --skip-tests

------------------------------------------------------------------------------------------------
Infrastructure -> Install stackexchange.redis

------------------------------------------------------------------------------------------------
app ->  ng g m basket -> cd basket ->  ng g m basket-routing --flat -> ng g c basket --flat --skip-tests
->  ng g s basket --flat --skip-tests
client -> npm i uuid

------------------------------------------------------------------------------------------------

shared/component -> ng g c order-totals --skip-tests

app ->  ng g m checkout -> cd checkout -> ng g m checkout-routing --flat 
-> ng g s checkout --flat --skip-tests -> ng g c checkout --flat --skip-tests
------------------------------------------------------------------------------------------------

Infrastructure -> Microsoft.AspNetCore.Identity, Microsoft.AspNetCore.Identity.EntityFrameWorkCore, 
  Microsoft.identiymodel.tokens, system.identitymodel.tokens.jwt
Api -> Microsoft.AspNetCore.Authentication.jwtbearer
Core -> Microsoft.Extensions.identity.stores
skinet dotnet ef migrations add IdentityInitial -p Infrastructure -s API -o Identity/Migrations -c AppIdentityDbContext
if forget something dotnet ef migrations remove -p Infrastructure -s API  -c AppIdentityDbContext

------------------------------------------------------------------------------------------------
app -> ng g m account
account -> ng g m account-routing --flat, ng g s account --flat --skip-tests, ng g c login --skip-tests, ng g c register --skip-tests
shared/component -> ng g c text-input

------------------------------------------------------------------------------------------------

core -> new folder guards -> cd guards -> ng g g auth --skip-tests
skinet -> dotnet ef migrations add OrderEntityAdded -p Infrastructure -s API -c StoreContext

------------------------------------------------------------------------------------------------
client -> ng add @angular/cdk
shared/components -> ng g c stepper --skip-tests
app/checkout -> ng g c checkout-address --skip-tests, ng g c checkout-delivery --skip-tests, ng g c checkout-review --skip-tests, ng g c checkout-payment --skip-tests, ng g c checkout-success --skip-tests
------------------------------------------------------------------------------------------------

shared/components -> ng g c basket-summary --skip-tests
------------------------------------------------------------------------------------------------
app -> ng g c order-detailed, ng g m orders
cd orders -> ng g m order-routing --flat,  ng g s orders --flat, ng g c orders --flat --skip-tests
