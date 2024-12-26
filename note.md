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
