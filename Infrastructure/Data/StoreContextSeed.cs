using System.Text.Json;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try 
            {
                if(!context.ProductBrands.Any()) 
                {
                    var brandsData = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");
                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
                    brands?.ForEach(brand => context.ProductBrands.Add(brand));

                    await context.SaveChangesAsync();
                }

                if(!context.ProductTypes.Any()) 
                {
                    var typesData = File.ReadAllText("../Infrastructure/Data/SeedData/types.json");
                    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);
                    types?.ForEach(type => context.ProductTypes.Add(type));

                    await context.SaveChangesAsync();
                }

                if(!context.Products.Any()) 
                {
                    var productsData = File.ReadAllText("../Infrastructure/Data/SeedData/products.json");
                    var products = JsonSerializer.Deserialize<List<Product>>(productsData);
                    products?.ForEach(product => context.Products.Add(product)); 
                    
                    await context.SaveChangesAsync();
                }

                if(!context.DeliveryMethods.Any()) 
                {
                    var dmData = File.ReadAllText("../Infrastructure/Data/SeedData/delivery.json");
                    var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(dmData);
                    methods?.ForEach(method => context.DeliveryMethods.Add(method));

                    await context.SaveChangesAsync();
                }
            }
            catch (Exception ex) 
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}