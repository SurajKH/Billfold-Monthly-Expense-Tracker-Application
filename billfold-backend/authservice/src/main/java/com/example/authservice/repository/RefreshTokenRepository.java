package com.example.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.authservice.entity.RefreshToken;

import java.util.Optional;


@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken,Integer> {

   @Query(value = "SELECT * FROM refresh_token_table t WHERE t.refresh_token = :refreshToken", nativeQuery = true)
Optional<RefreshToken> findByRefreshToken(@Param("refreshToken") String refreshToken);
  //  List<RefreshToken> findByRefreshToken(String refreshToken);
}
