package com.kds.chefhub.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.kds.chefhub.token.Token;
import com.kds.chefhub.model.User;




public interface TokenRepository extends JpaRepository<Token, String>{

 

    
    @Query("""
        select  t from Token t inner join User u on t.user.id = u.id where u.id = :userid and (t.expired = false or t.revoked = false)
            """)
    List<Token> findAllValidTokensByUser(String userid);

    Optional<Token> findByToken(String token);

   List<Token> findByUser(User user);

//    List<Token> findByActiveToken(String token);
    

}
