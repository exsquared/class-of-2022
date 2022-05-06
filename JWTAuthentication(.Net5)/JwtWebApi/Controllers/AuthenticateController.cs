using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using JwtWebApi.UtilityLibrary;

namespace JwtWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly JwtTokenConfig _jwtTokenConfig;

        public AuthenticateController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("{userName}/{password}")]
        public IActionResult Login(string userName, string password)
        {
            var user = UtilityLibrary.Utility.Authenticate(userName, password);
            if (user != null)
            {
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtTokenConfig:Secret"]));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var claims = new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.UserName),
                    new Claim(ClaimTypes.Email, user.Email)
                };
                var token = new JwtSecurityToken(_configuration["JwtTokenConfig:Issuer"],
                    _configuration["JwtTokenConfig:Audience"],
                    claims,
                    expires:DateTime.Now.AddMinutes(30),
                    signingCredentials:credentials);
                
                var jwtToken = new JwtSecurityTokenHandler().WriteToken(token);

                return Ok(jwtToken);
            }
            return NotFound("User not found.");
        }
    }
}